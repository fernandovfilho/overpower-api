import {
  ILoginRequestDTO,
  ILoginResponse,
} from '../useCases/Session/Login/LoginDTO';

export interface ISessionRepository {
  login(user: ILoginRequestDTO): Promise<ILoginResponse>;
}
