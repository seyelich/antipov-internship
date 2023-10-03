import { TUser } from "../../types";

export interface IAuthRes {
  id: number;
  token?: string;
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


