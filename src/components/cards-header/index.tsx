import { useLocation, useNavigate, useParams } from "react-router";
import { Button } from "../../ui/button";
import styles from "./index.module.css";
import { ReactNode } from "react";
import { useAppDispatch } from "../../services/types";
import { logout } from "../../services/reducers/auth";

export const CardsHeader = ({children}: {children: ReactNode}) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(logout());
    navigate('/signin');
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      {
        pathname === `/${id}` ?
          <>
            <button onClick={handleGoBack} className={`${styles.btn_type_back} ${styles.btn_type_mob}`}>
              <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z" fill="#F8F8F8"/>
              </svg>
            </button>
            <Button text="Назад" type="button" extraClass={`${styles.btn} ${styles.btn_type_back}`} />
          </>
          : null
      }
      {children}
      {
        <>
          <button
            className={`${styles.btn_type_mob} ${styles.btn_type_exit}`}
            onClick={handleExit}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.79 24.29C19.18 24.68 19.81 24.68 20.2 24.29L23.79 20.7C23.8827 20.6075 23.9563 20.4976 24.0064 20.3766C24.0566 20.2557 24.0824 20.126 24.0824 19.995C24.0824 19.864 24.0566 19.7343 24.0064 19.6134C23.9563 19.4924 23.8827 19.3825 23.79 19.29L20.2 15.7C20.013 15.513 19.7594 15.408 19.495 15.408C19.2306 15.408 18.977 15.513 18.79 15.7C18.603 15.887 18.498 16.1406 18.498 16.405C18.498 16.6694 18.603 16.923 18.79 17.11L20.67 19H12C11.45 19 11 19.45 11 20C11 20.55 11.45 21 12 21H20.67L18.79 22.88C18.4 23.27 18.41 23.91 18.79 24.29ZM27 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V14C13 13.45 13.45 13 14 13H26C26.55 13 27 13.45 27 14V26C27 26.55 26.55 27 26 27H14C13.45 27 13 26.55 13 26V24C13 23.45 12.55 23 12 23C11.45 23 11 23.45 11 24V27C11 28.1 11.9 29 13 29H27C28.1 29 29 28.1 29 27V13C29 11.9 28.1 11 27 11Z" fill="#F8F8F8"/>
            </svg>
          </button>
          <Button
            text="Выход"
            type="button"
            extraClass={`${styles.btn} ${styles.btn_type_exit}`}
            onClick={handleExit}
          />
        </>
      }
    </div>
  )
}
