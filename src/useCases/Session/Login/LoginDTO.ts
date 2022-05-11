export interface ILoginRequestDTO {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  email: string;
  token: string;
}
