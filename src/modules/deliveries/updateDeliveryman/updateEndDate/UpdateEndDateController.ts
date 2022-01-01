import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";



export class UpdateEndDateController {
    async handle(request: Request, response: Response) {
        const updateEndDateUseCase = new UpdateEndDateUseCase();
        const { id_deliveryman } = request;
        const {id_deliveries} = request.params;
        const result = await updateEndDateUseCase.execute({id_deliveryman, id_deliveries});
        return response.json(result);
    }
}