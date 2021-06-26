import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


class ListUserReceiverComplimentsController {

  async handle(request: Request, response: Response){
    const { user_id } = request
    
    const listUserReceiverCompliments = new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiverCompliments.execute(user_id);
  
    return response.json(compliments);
  }
}

export { ListUserReceiverComplimentsController };