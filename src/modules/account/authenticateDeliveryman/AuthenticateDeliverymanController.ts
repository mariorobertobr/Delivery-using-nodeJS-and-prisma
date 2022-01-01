import { Response, Request } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";




export class AuthenticateDeliverymanController {

    async handle(request: Request, response: Response ){
        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
        const result = await authenticateDeliverymanUseCase.execute({
            username: request.body.username,
            password: request.body.password
        })

        return response.json(result)
    }
    
}