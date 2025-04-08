"use client";
import { MdLogout } from "react-icons/md";
import styles from "./mainbar.module.css";
import { FiCodesandbox } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const MainBar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div><FiCodesandbox className={styles.i} /></div>
          <h1>UniStores</h1>
        </div>
        <nav className={styles.options}>
          <ul>
            <li><a href="" className={styles.a}>Home</a></li>
            <li><a href="" className={styles.a}>Products</a></li>
            <li><a href="" className={styles.a}>Categories</a></li>
            <li><a href="" className={styles.a}>Review</a></li>
          </ul>
        </nav>
        <nav className={styles.icons}>
          <div><LuShoppingCart className={styles.i} /></div>
          <div><FaRegUser className={styles.i} /></div>
          <div><MdLogout className={styles.i} /></div>
        </nav>

      </header>
    </>
  );
};

export default MainBar;
