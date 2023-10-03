import { FormEvent } from "react";
import useForm from "../../hooks/useForm";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "../../services/types";
import { login } from "../../services/actions/auth";
import { Navigate } from "react-router";
import { getCookie } from "../../utils/utils";
import Loader from "../../components/loader";

export const SignInPage = () => {
  const token = getCookie('token');
  const dispatch = useAppDispatch();
  const { userId, loading } = useAppSelector(store => store.auth);

  const { values, setValues, handleChange } = useForm({
    email: "",
    pw: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setValues({
      email: "",
      pw: "",
    });

    dispatch(login({
      email: values.email,
      pw: values.pw,
    }))
  }

  if (token || userId) {
    return <Navigate replace to="/" />
  }

  return (
    <main className={styles.container}>
      {
        loading ?
        <Loader /> :
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <h1 className={styles.title}>
              Вход
            </h1>
            <Input
              placeholder="example@mail.ru"
              name="email"
              value={values.email}
              label="Электронная почта"
              onChange={handleChange}
              isCorrect={true}
            />
            <Input
              placeholder="******"
              name="pw"
              value={values.pw}
              label="Пароль"
              onChange={handleChange}
              isCorrect={true}
              type="password"
            />
          </div>
          <Button
            text='Войти'
            type='submit'
            isDisabled={false}
          />
        </form>
      }
    </main>
  )
}
