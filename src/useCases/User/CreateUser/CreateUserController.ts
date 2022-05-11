import { Request, Response } from 'express';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body as ICreateUserRequestDTO;
      await this.createUserCase.execute(data);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}
