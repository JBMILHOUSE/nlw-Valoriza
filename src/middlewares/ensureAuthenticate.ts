import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
 sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {

  // receber o token
  const authToken = request.headers.authorization

  // validar se token está preenchido
  if(!authToken){
    return response.status(401).end();
  }
  
  const [, token] = authToken.split(" ")
   
   // validar se token é válido
  try {
    const { sub } = verify(token , "4cd033eb01966559f8f9f958c602a2a8") as IPayload;
    
    // recuperar informações do usuario
    request.user_id = sub;

    return next();
  } catch(err){
    return response.status(401).end();
  }
}