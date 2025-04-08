"use client";
import { FaFacebook, FaGoogle, FaLinkedin, FaRegIdCard } from "react-icons/fa";
import styles from "./FormBar.module.css";
import { FormBlock } from "@/types/Interface";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const FormBar = (props: FormBlock) => {
  return (
    <>
      <div className={`${styles.container} ${props.move ? styles.move : ""}`}>
        <div className={styles.content}>
          <h1>{props.h1}</h1>
          <div className={styles.options}>
            <div><FaGoogle /></div>
            <div><FaFacebook /></div>
            <div><FaLinkedin /></div>
          </div>
          <form className={styles.form} style={{ height: props.formHeight }}>
            {props.showAllFields ? (
              <>
                <div>
                  <div><CiUser /></div>
                  <input type="text" placeholder="Nome" />
                </div>
                <div>
                  <div><FaRegIdCard /></div>
                  <input type="number" placeholder="RA" />
                </div>
                <div>
                  <div><MdOutlineEmail /></div>
                  <input type="e-mail" placeholder="E-mail" />
                </div>
                <div>
                  <div><TbLockPassword /></div>
                  <input type="password" placeholder="Password" />
                </div>
              </>
            ) : (
              <>
              <div>
                  <div><FaRegIdCard /></div>
                  <input type="number" placeholder="RA" />
                </div>
                <div>
                  <div><TbLockPassword /></div>
                  <input type="password" placeholder="Password" />
                </div>
              </>
            )}
          </form>
          {!props.showAllFields && <a href="#">Forgot your password?</a>}
          <button>{props.btn}</button>
        </div>
      </div>
    </>
  );
};

export default FormBar;