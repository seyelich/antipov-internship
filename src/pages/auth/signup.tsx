import { FormEvent } from "react";
import useForm from "../../hooks/useForm";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import styles from "./index.module.css";
import { useAppDispatch, useAppSelector } from "../../services/types";
import { register } from "../../services/actions/auth";
import { Navigate } from "react-router";
import { getCookie } from "../../utils/utils";

export const SignUpPage = () => {
  const token = getCookie('token');
  const dispatch = useAppDispatch();
  const { userId } = useAppSelector(store => store.auth);

  const { values, setValues, handleChange } = useForm({
    name: "",
    email: "",
    pw: "",
    pwCheck: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setValues({
      name: "",
      email: "",
      pw: "",
      pwCheck: "",
    });

    dispatch(register({
      email: values.email,
      pw: values.pw,
    }))
  }

  if (token || userId) {
    return (<Navigate to="/" />)
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <h1 className={styles.title}>
            Регистрация
          </h1>
          <Input
            placeholder="Артур"
            name="name"
            value={values.name}
            label="Имя"
            onChange={handleChange}
            isCorrect={true}
          />
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
          <Input
            placeholder="******"
            name="pwCheck"
            value={values.pwCheck}
            label="Подтвердите пароль"
            onChange={handleChange}
            isCorrect={true}
            type="password"
          />
        </div>
        <Button
          text='Зарегистрироваться'
          type='submit'
          isDisabled={false}
        />
      </form>
    </main>
  )
}
