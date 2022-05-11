import { Request, Response } from 'express';
import { ILoginRequestDTO } from './LoginDTO';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body as ILoginRequestDTO;
      const login = await this.loginUseCase.execute(data);
      return response.json(login);
    } catch (error) {
      return response.status(401).send(error.message);
    }
  }
}
