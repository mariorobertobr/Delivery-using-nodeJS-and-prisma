import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
    async handle(request: Request, response: Response){
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const {username, password} = request.body;
        const user = await createDeliverymanUseCase.execute({
            username,
            password
        });

        return response.json(user)
    }
}