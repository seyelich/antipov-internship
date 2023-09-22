import { FormEvent } from "react";
import useForm from "../../hooks/useForm";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import styles from "./index.module.css";

export const SignInPage = () => {
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
    console.log('Form has been sent')
  }

  return (
    <main className={styles.container}>
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
    </main>
  )
}
