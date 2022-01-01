import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export async function ensureAuthenticatedDeliveryman(request: Request, response: Response, next: NextFunction){
    const authheader = request.headers.authorization;
    if(!authheader){
        return response.status(401).send({error: 'No token provided'});
        
    }
    const [type, token] = authheader.split(' ');
    if(type !== 'Bearer'){
        return  response.status(401).send({error: 'Invalid token'});
    }

    try{
        const { sub } = verify(token, "você ta cagado") as IPayload;
        
        request.id_deliveryman  = sub;

        return next();

    }
    catch(error){
        return response.status(401).send({error: 'Token invalid'});
    }
    

}