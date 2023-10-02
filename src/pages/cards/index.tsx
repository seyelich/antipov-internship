import { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { CardsHeader } from "../../components/cards-header";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../services/types";
import { getUsersInfo } from "../../services/actions/users";

export const CardsPage = () => {
  const { users, pageLimit } = useSelector((store: RootState) => store.users);
  const [ page, setPage ] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersInfo(page));
  }, [dispatch, page])


  const handleClick = () => {
    setPage(page+1);
  }

  return (
    <main style={{overflow:"hidden"}}>
      <CardsHeader>
        <div className={styles.container}>
          <h1 className={styles.title}>Наша команда</h1>
          <p className={styles.par}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
        </div>
      </CardsHeader>
      <ul className={styles.list}>
        {users.map((el, i) => <Card el={el} key={i} />)}
      </ul>
      {
        page < pageLimit &&
        <button className={styles.btn} onClick={handleClick}>
          Показать еще
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.497 0.989027L8.99999 8.29703L1.50299 0.989027C1.36905 0.858193 1.18923 0.784947 1.00199 0.784947C0.814751 0.784947 0.634939 0.858193 0.500992 0.989027C0.436135 1.05257 0.384611 1.12842 0.349436 1.21213C0.314261 1.29584 0.296143 1.38573 0.296143 1.47653C0.296143 1.56733 0.314261 1.65721 0.349436 1.74092C0.384611 1.82463 0.436135 1.90048 0.500992 1.96403L8.47649 9.74003C8.61655 9.87655 8.8044 9.95295 8.99999 9.95295C9.19558 9.95295 9.38343 9.87655 9.52349 9.74003L17.499 1.96553C17.5643 1.90193 17.6162 1.8259 17.6517 1.74191C17.6871 1.65792 17.7054 1.56769 17.7054 1.47653C17.7054 1.38537 17.6871 1.29513 17.6517 1.21114C17.6162 1.12715 17.5643 1.05112 17.499 0.987526C17.365 0.856693 17.1852 0.783447 16.998 0.783447C16.8108 0.783447 16.6309 0.856693 16.497 0.987526V0.989027Z" fill="#151317"/>
          </svg>
        </button>
      }
    </main>
  )
}
