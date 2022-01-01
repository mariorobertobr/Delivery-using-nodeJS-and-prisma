import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(request: Request, response: Response){
        const createClientUseCase = new CreateClientUseCase();
        
        const result = await createClientUseCase.execute({
            username: request.body.username,
            password: request.body.password,
            
        });
        
        return response.json(result)
    }
}