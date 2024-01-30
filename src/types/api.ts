import { IUser } from ".";

export interface IAPIResponse<T> {
  message: string;
  data: T;
}

export interface IAPIErrorResponse {
  message: string;
  error: {
    statusCode: number;
    message: string[];
  };
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}
