export type TResponse<T> = {
  success: boolean;
} & T;

export type TSetCookieProps = {[props: string]: string | boolean | number | Date | null}; //костыль

export type TUserForm = {
  email: string;
  pw: string;
}

export type TUser = {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  avatar: string;
}
