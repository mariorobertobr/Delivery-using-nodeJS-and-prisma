
//create class FindAllDeliverymanUseCase

import { prisma } from "../../../../database/prismaClient";


interface IDelivery{
    id_deliveryman: string;
}

export class FindAllDeliverymanUseCase{
    async execute({id_deliveryman}:IDelivery){
        const deliverymans = await prisma.deliveryman.findMany({
            where:{
                id: id_deliveryman,
                
            },
            select: {
                
                id: true,
                username: true,
                deliveries: true
            }
        })
        return deliverymans;
    }
}