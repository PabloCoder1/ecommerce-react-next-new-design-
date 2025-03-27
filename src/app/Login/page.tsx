"use client";
import { useState } from "react";
import { Login } from "../types/Interface";
import styles from "./Login.module.css";
import { FaGoogle, FaFacebook, FaLinkedinIn, FaRegUser, FaRegIdCard } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const contentConfig = {
  original: {
    h1: "Olá, Amigo!",
    p: "Insira seus dados pessoais e comece sua jornada conosco",
    btn: "Cadastre-se",
    title: "Bem-vindo",
    btnform: "Entrar"
  },
  alt: {
    h1: "Bem-vindo!",
    p: "Para se manter conectado, faça login com suas informações pessoais",
    btn: "Já tem uma conta?",
    title: "Criar Conta",
    btnform: "Cadastre-se"
  },
};
const LoginPage = (props: Login) => {
  const [currentContent, setCurrentContent] = useState(contentConfig.original);
  const [isOriginal, setIsOriginal] = useState(true);
  const [estaMovido, setEstaMovido] = useState(false);
  const [mostrarInputs, setMostrarInputs] = useState(true); // Controla o display

  const handleClick = () => {
    setCurrentContent(isOriginal ? contentConfig.alt : contentConfig.original);
    setIsOriginal(!isOriginal);
    setEstaMovido(!estaMovido);
    setMostrarInputs(!mostrarInputs); // Alterna a visibilidade dos inputs
  };

  const BlueBlockStyle = {
    'right': estaMovido ? '54.2255vw' : '0',
    'transition': 'right 0.7s ease-in-out',
    'borderBottomLeftRadius': estaMovido ? '0' : '12px',
    'borderTopLeftRadius': estaMovido ? '0' : '12px',
    'borderBottomRightRadius': estaMovido ? '12px' : '0',
    'borderTopRightRadius': estaMovido ? '12px' : '0',
  };
  const WhiteBlockStyle = {
    'left': estaMovido ? '45.7745vw' : '0',
    'transition': 'left 0.7s ease-in-out',
  };

  const inputStyle = {
    display: mostrarInputs ? 'none' : 'flex',
    transition: 'opacity 0.3s ease-in-out',
    opacity: 1,
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.BlueBlock} style={BlueBlockStyle}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>{currentContent.h1}</h1>
              <p>{currentContent.p}</p>
            </div>
            <div className={styles.contentbtn}>
              <button className={styles.btn} onClick={handleClick}>
                {currentContent.btn}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.WhiteBlock} style={WhiteBlockStyle}>
          <div className={styles.containerform}>
            <h1>{currentContent.title}</h1>
            <ul className={styles.options}>
              <li><FaGoogle /></li>
              <li><FaFacebook /></li>
              <li><FaLinkedinIn /></li>
            </ul>
            <div className={styles.contentform}>
              <form action="" className={styles.form}>
                <div className={styles.input} style={inputStyle}>
                  <div><FaRegUser className={styles.i} /></div>
                  <input type="text" placeholder="Nome" />
                </div>
                <div className={styles.input}>
                  <div><FaRegIdCard className={styles.i} /></div>
                  <input type="number" placeholder="RA" />
                </div>
                <div className={styles.input} style={inputStyle}>
                  <div><MdOutlineEmail className={styles.i} /></div>
                  <input type="email" placeholder="E-mail" />
                </div>
                <div className={styles.input}>
                  <div><TbLockPassword className={styles.i} /></div>
                  <input type="password" placeholder="Senha" />
                </div>
              </form>
              <div className={styles.containerbtn}>
                <button>{currentContent.btnform}</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;