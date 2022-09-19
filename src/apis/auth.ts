import Api from './Api';

interface GenericResponse {
  loginResult: boolean;
  accessToken: string;
  refreshToken: string;
  signUpToken: string;
  user: any;
}

export const checkLogin = (social: string, token: string) =>
  Api.post<GenericResponse>(`/oauth/login/${social}`, token);

export const userLogin = () => {};

export const checkToken = () => {};

export const userLogout = () => {};
