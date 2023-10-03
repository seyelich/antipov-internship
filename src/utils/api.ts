import { IAuthRes, IUsersRes } from "../services/types/data";
import { TResponse, TUserForm } from "../types";
import { adress } from "./constants";

const checkResponse = <T>(res: Response) => {
  return res.ok ? res.json().then(data => data as TResponse<T>) : Promise.reject(res.status);
};

function request<T>(url: string, options?: RequestInit) {
  return fetch(url, options).then(res => checkResponse<T>(res))
}

export function registerUser(user: TUserForm) {
  return request<IAuthRes>(`${adress}/register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          email: user.email,
          password: user.pw,
      })
  })
}

export function loginUser(user: TUserForm) {
  return request<IAuthRes>(`${adress}/login`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          email: user.email,
          password: user.pw
      })
  })
}

export function getUsersRequest(page: number) {
  return request<IUsersRes>(`${adress}/users?page=${page}`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
  })
}
