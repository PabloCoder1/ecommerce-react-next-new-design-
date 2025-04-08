"use client";
import styles from "./popup.module.css";
import { LuDollarSign } from 'react-icons/lu';
import { useRef } from "react";
import { SiNamecheap, SiTyper } from "react-icons/si";
import { GoFileDirectory } from "react-icons/go";
import { MdOutlineDescription } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { Popup } from "@/types/Interface";
import { TbBrandReason } from "react-icons/tb";

const PopupComponent = (props: Popup) => {

  const nomeRef = useRef<HTMLInputElement>(null);
  const valorRef = useRef<HTMLInputElement>(null);
  const arquivoRef = useRef<HTMLInputElement>(null);
  const descricaoRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const motivoRef = useRef<HTMLInputElement>(null);

  let spacing: number = 0;
  let heightForm: string = '';
  let heightBtn: string = '110px';
  let DisplayBtn: string = '';

  const propsToCheck: (string | undefined)[] = [props.nome, props.valor, props.file, props.descricao, props.quantidade, props.type, props.motivo];

  const heightMap: { [key: number]: string } = {
    2: '210px',
    4: '260px',
    5: '354px',
  };

  propsToCheck.forEach(prop => {
    if (prop === 'flex') {
      spacing += 1;
      if (heightMap[spacing]) {
        heightForm = heightMap[spacing];
      }
    }
  });

  if (props.btn2 === '') {
    heightBtn = '50px';
    DisplayBtn = 'none';
  }

  console.log("Props:", props); // Adicionado para depuração
  console.log("Spacing:", spacing);
  console.log("HeightForm:", heightForm);

  return (
    <>
      <div className={styles.container}>

        <div className={styles.contenth1}>
          <h1>{props.h1}</h1>
        </div>

        <div className={styles.Infoimg} style={{ display: props.img }}>
          {props.img && <img src={props.img} alt="Foto do Produto" />}
        </div>

        <div className={styles.contentinput} style={{ height: heightForm }}>
          <div className={styles.items} style={{ display: props.nome }}>
            <SiNamecheap className={styles.img} />
            <input type="text" placeholder="Nome" className={styles.input} ref={nomeRef} />
          </div>

          <div className={styles.items} style={{ display: props.valor }}>
            <LuDollarSign className={styles.img} />
            <input type="number" placeholder="Valor" className={styles.input} ref={valorRef} />
          </div>

          <div className={styles.items} style={{ display: props.file }}>
            <GoFileDirectory className={styles.img} />
            <input type="file" className={styles.input} ref={arquivoRef} />
          </div>

          <div className={styles.items} style={{ display: props.descricao }}>
            <MdOutlineDescription className={styles.img} />
            <input type="text" placeholder="Descrição" className={styles.input} ref={descricaoRef} />
          </div>

          <div className={styles.items} style={{ display: props.quantidade }}>
            <IoAdd className={styles.img} />
            <input type="number" placeholder="Quantidade" className={styles.input} ref={quantidadeRef} />
          </div>

          <div className={styles.items} style={{ display: props.type }}>
            <SiTyper className={styles.img} />
            <input type="text" placeholder="Tipo de Movimento" className={styles.input} ref={typeRef} />
          </div>

          <div className={styles.items} style={{ display: props.motivo }}>
            <TbBrandReason className={styles.img} />
            <input type="text" placeholder="Motivo" className={styles.input} ref={motivoRef} />
          </div>
        </div>

        <div className={styles.contentbtn} style={{ height: heightBtn }}>
          <button>{props.btn1}</button>
          <button style={{ display: DisplayBtn }}>{props.btn2}</button>
        </div>

      </div>
    </>
  );
};

export default PopupComponent;