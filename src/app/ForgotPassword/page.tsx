    "use client";
    import { useRef, useState } from "react";
    import { FaRegIdCard } from "react-icons/fa";
    import styles from "./ForgotPassword.module.css";
    import { ResetPassword } from "@/types/Interface";
    import api from "@/services/api";
    import Swal from "sweetalert2";

    const ForgotPassword = (props: ResetPassword) => {
        const inputEmail = useRef<HTMLInputElement>(null);
        const inputCode = useRef<HTMLInputElement>(null); // Nova referência para o input de código
        const inputNewPassword = useRef<HTMLInputElement>(null); // Nova referência para o novo password
        const inputConfirmPassword = useRef<HTMLInputElement>(null); // Nova referência para a confirmação do password

        const [inputHeight, setInputHeight] = useState(66);
        const [clickCount, setClickCount] = useState(0); // Novo estado para contar cliques
        const [showInputs, setShowInputs] = useState(false); // Para mostrar os inputs de nova senha
        const [showCodeInput, setShowCodeInput] = useState(false); // Para mostrar o input de código
        const [button, setButton] = useState("Send E-mail");

        const handleButtonClick = async () => {
            setClickCount(prevCount => prevCount + 1); // Incrementa o contador de cliques
            
            if (clickCount === 0) {
                setButton("Confirm Code");
                await PostSendEmail(); // Chama a função para enviar o email
                setShowCodeInput(true); // Mostra o input de código
            } else if (clickCount === 1) {
                setInputHeight(153); // Altera a altura do input para os novos campos
                setShowInputs(true); // Mostra os inputs de nova senha
                setShowCodeInput(false); // Esconde o input de código
            }
        };

        async function PostSendEmail() {
            const email = inputEmail.current?.value; // Captura o valor do input de email

            const data = {
                email: email // Estrutura correta do objeto
            };

            console.log("Dados enviados para PostSendEmail:", data);
            console.log("esse é o codigo: ",inputCode)

            try {
                const response = await api.post("/Esqueci-Senha", data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Email enviado com sucesso",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(response);
            } catch (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Erro ao enviar o email",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.error(error);
            }
        }

        async function PatchSendCode() {
            const email = inputEmail.current?.value; // Captura o valor do input de email
            const code = inputCode.current?.value; // Captura o valor do input de código
            const newPassword = inputNewPassword.current?.value; // Captura o valor do input de nova senha
            const confirmPassword = inputConfirmPassword.current?.value; // Captura o valor do input de confirmação de senha
            console.log("esse é o codigo: ",code)

            // Verifica se a nova senha e a confirmação da senha são iguais
            if (newPassword !== confirmPassword) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "As senhas não coincidem",
                    showConfirmButton: false,
                    timer: 1500
                });
                return;
            }

            const data = {
                email: email, // Estrutura correta do objeto
                ResetCode: code,
                NewPassword: newPassword
            };

            console.log("Dados enviados para PostSendCode:", data); // Verifique os dados aqui
            try {
                const response = await api.patch("/Senha-Nova", data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Senha alterada com sucesso",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(response);
            } catch (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Erro ao alterar a senha",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.error(error);
            }
        }

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
                                            <input type="password" placeholder="New Password" ref={inputNewPassword} />
                                        </div>
                                        <div className={styles.casing}>
                                            <div><FaRegIdCard /></div>
                                            <input type="password" placeholder="Confirm Password" ref={inputConfirmPassword} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {showCodeInput ? (
                                            <div className={styles.casing}>
                                                <div><FaRegIdCard /></div>
                                                <input type="text" placeholder="Enter" ref={inputCode} />
                                            </div>
                                        ) : (
                                            <div className={styles.casing}>
                                                <div><FaRegIdCard /></div>
                                                <input type="email" placeholder="Email" ref={inputEmail} />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                            {showInputs ? (
                                <>
                                    <p>Preencha o campo acima e nós enviaremos um link pelo seu e-mail</p>
                                    <button onClick={PatchSendCode}>Send E-mail</button>
                                </>
                            ) : (
                                <>
                                    <p>Preencha o campo acima e nós enviaremos um link pelo seu e-mail</p>
                                    <button onClick={handleButtonClick}>{button}</button>
                                </>
                            )}
                        </div>
                    </div>
                </main>
            </>
        );
    };

    export default ForgotPassword;