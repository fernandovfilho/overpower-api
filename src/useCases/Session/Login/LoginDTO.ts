export interface ILoginRequestDTO {
  email: string;
  password: string;
}

export interface ILoginResponse {
  email: string;
  token: string;
}
