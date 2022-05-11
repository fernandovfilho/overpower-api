import { ISessionRepository } from '../../../repositories/ISessionRepository';
import { ILoginRequestDTO, ILoginResponse } from './LoginDTO';

export class LoginUseCase {
  constructor(private sessionRepository: ISessionRepository) {}

  async execute(data: ILoginRequestDTO): Promise<ILoginResponse> {
    const login = await this.sessionRepository.login(data);
    if (!login) {
      throw new Error('Invalid login');
    }

    return login;
  }
}
