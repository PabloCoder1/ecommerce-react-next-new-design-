import styles from "./searchbox.module.css";
import { IoSearch } from "react-icons/io5";

const Catalog = () => {
  return (
    <>
      <div className={styles.search}>
        <input type="text" placeholder="Pesquisar..." />
        <IoSearch className={styles.i} />
      </div>
    </>
  );
};

export default Catalog;