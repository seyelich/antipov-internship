import { TUser } from "../../types";

export interface IAuthRes {
  user: TUser;
  accessToken?: string;
  refreshToken?: string;
}

export interface IPwRequestRes   {
  message: string;
}

export interface IGetTokenRes {
  accessToken: string;
  refreshToken: string;
}

export interface IUsersRes {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TUser[];
  support: {
    url: string,
    text: string
  }
}


