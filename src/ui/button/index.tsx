import styles from './index.module.css';

type TButton = {
  text: string;
  type: HTMLButtonElement['type'];
  isDisabled?: boolean;
  extraClass?: string;
  onClick?: () => {};
}

export const Button = ({
  text,
  type,
  isDisabled,
  extraClass,
  onClick,
}: TButton) => {
  return (
    <button
      className={`${styles.button} ${extraClass}`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
