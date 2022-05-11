import { Request, Response } from 'express';
import { RequestWithUser } from '../../../repositories/IUsersRepository';
import { GetUserUseCase } from './GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body as RequestWithUser<Request>;

    try {
      const user = await this.getUserUseCase.execute({
        id: data._authUser.id,
        email: data._authUser.email,
      });
      return response.json(user);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}
