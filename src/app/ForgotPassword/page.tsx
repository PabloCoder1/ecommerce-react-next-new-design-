"use client";
import { useRef, useState } from "react";
import { FaRegIdCard } from "react-icons/fa";
import styles from "./ForgotPassword.module.css";

const Login = () => {
    const inputRa = useRef<HTMLInputElement>(null);
    const [newPassword, setNewPassword] = useState(''); // Estado para armazenar a nova senha
    const [confirmPassword, setConfirmPassword] = useState(''); // Estado para armazenar a confirmação da senha

    const [inputHeight, setInputHeight] = useState(66);
    const [showInputs, setShowInputs] = useState(false);

    const handleButtonClick = () => {
        setInputHeight(153);
        setShowInputs(true);
    };

    const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value); // Atualiza a nova senha
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value); // Atualiza a confirmação da senha
    };

    return (
        <>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>Forgot Password</h1>
                        <div className={styles.input} style={{ height: `${inputHeight}px` }}>

                            {showInputs ? (
                                <>
                                    <div className={styles.casing}>
                                        <div><FaRegIdCard /></div>
                                        <input 
                                            type="password" 
                                            placeholder="New Password" 
                                            value={newPassword} 
                                            onChange={handleNewPasswordChange} // Atualiza o estado da nova senha
                                        />
                                    </div>
                                    <div className={styles.casing}>
                                        <div><FaRegIdCard /></div>
                                        <input 
                                            type="password" 
                                            placeholder="Confirm Password" 
                                            value={confirmPassword} 
                                            onChange={handleConfirmPasswordChange} // Atualiza o estado da confirmação da senha
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.casing}>
                                        <div><FaRegIdCard /></div>
                                        <input type="e-mail" placeholder="RA/E-mail" ref={inputRa}/>
                                    </div>
                                </>
                            )}
                        </div>
                        <p>Preencha o campo acima e nós enviaremos um link pelo seu e-mail</p>
                        <button onClick={handleButtonClick}>Send E-mail</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;