import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({email, password}: IAuthenticateRequest){
     const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificar se email existe
     const user = await usersRepositories.findOne({
       email
     });

     if(!user){
       throw new Error("Email/Password incorrect");
     }

    //verificar se senha está correta
     const passwordMatch = await compare(password, user.password)     

     if(!passwordMatch){
      throw new Error("Email/Password incorrect");
     }
    
     // gerar token
     const token = sign({
       email: user.email,
      }, "4cd033eb01966559f8f9f958c602a2a8", {
       subject: user.id,
       expiresIn: "1d"
      });

      return token;
  }
}

export { AuthenticateUserService };