import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt'
interface ICreateClient{
    username: string;
    password: string;

}
export class CreateClientUseCase {

    async execute({username, password}:ICreateClient){
        const clientExists = await prisma.clients.findFirst({
            where: {
                username : {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })
        
        
        if(clientExists){
            throw new Error("Client already exist")
        }

        const hashedPassword = await hash(password, 10);
        
        const client = await prisma.clients.create({
            data : {
                username: username.toLowerCase(),
                password: hashedPassword
            }
        })
        
        return client;

    }
}