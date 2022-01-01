import { Response, Request } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";




export class AuthenticateClientController {

    async handle(request: Request, response: Response ){
        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute({
            username: request.body.username,
            password: request.body.password
        })

        return response.json(result)
    }
    
}