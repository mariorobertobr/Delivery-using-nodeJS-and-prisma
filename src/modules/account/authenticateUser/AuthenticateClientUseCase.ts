import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


interface IAuthenticateClient {
    username: string;
    password: string;
}




export class AuthenticateClientUseCase{
    async execute({ username, password}: IAuthenticateClient){
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!client){
            throw new Error("invalid credentials.");
        }

        const passwordMatch = await compare(password, client.password);

        if(!passwordMatch){
            throw new Error("invalid password.");
        }

        const token = sign({username}, 'eutocagado', {
            subject: client.id,
            expiresIn: '1d',
        })

        return token;
    }
}