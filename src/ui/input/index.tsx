import { ChangeEvent, useState } from "react";
import styles from "./index.module.css";

type TInput = {
  placeholder?: string;
  name: string;
  value: string;
  label: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isCorrect: boolean;
}

export const Input = ({
  placeholder,
  name,
  value,
  label,
  type,
  onChange,
  isCorrect,

}: TInput) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${!isCorrect && styles.input_incorrect}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type === "password" && isVisible ? "text" : type}
        />
        {
          type === 'password' ?
          <button className={styles.btn} onClick={handleClick} type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7302 5.07319C11.1448 5.02485 11.5684 5 11.9999 5C16.6639 5 20.3998 7.90264 21.9999 12C21.6053 13.0104 21.0809 13.9482 20.4446 14.7877M6.51956 6.51944C4.47949 7.76406 2.90105 9.69259 1.99994 12C3.60008 16.0974 7.33597 19 11.9999 19C14.0375 19 15.8979 18.446 17.4805 17.4804M9.87871 9.87859C9.33576 10.4215 8.99994 11.1715 8.99994 12C8.99994 13.6569 10.3431 15 11.9999 15C12.8284 15 13.5785 14.6642 14.1214 14.1212" stroke="#808185" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 4L20 20" stroke="#808185" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button> : null
        }
        {
          !isCorrect && <p className={styles.err}>Ошибка</p>
        }
      </div>
    </div>
  )
}
