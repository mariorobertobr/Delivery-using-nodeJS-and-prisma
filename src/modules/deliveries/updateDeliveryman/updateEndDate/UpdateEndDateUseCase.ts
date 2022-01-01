import { prisma } from "../../../../database/prismaClient";

interface IDelivery{
    id_deliveryman: string;
    id_deliveries: string;
}


export class UpdateEndDateUseCase {a
    async execute({id_deliveryman, id_deliveries}:IDelivery){
        const updateDelivery = await prisma.deliveries.updateMany({
            where:{
                id: id_deliveries,
                id_deliveryman
            },
            data:{
                end_at: new Date(),
            }
        })
        console.log(updateDelivery)
        return updateDelivery;
    }
}