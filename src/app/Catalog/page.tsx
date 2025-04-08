import styles from "./catalog.module.css";
import Popup from "../../components/Popup/page";
import MainBar from "../../components/MainBar/page";
import SearchBox from "../../components/SearchBox/page";

const Catalog = () => {
  return (
    <>
    <main className={styles.main}>
    <MainBar/>
    <div className={styles.containerwrapper}>
      <SearchBox/>
    </div>
    {/*<Popup h1='Cadastrar Produtos' img='none' nome= 'flex' valor= 'flex' file= 'flex' descricao= 'flex' type= 'none' motivo= 'none' quantidade= 'flex' btn1= 'Confirmar' btn2= ''/>
      <Popup h1='Atualizar Item' img='none' nome= 'flex' valor= 'flex' file= 'flex' type= 'none' motivo= 'none' descricao= 'none' quantidade= 'flex' btn1= 'Atualizar' btn2= 'Fechar'/>
      <Popup h1='Informações' img='flex' nome= 'flex' valor= 'flex' file= 'flex' type= 'none' motivo= 'none' descricao= 'none' quantidade= 'flex' btn1= 'Fechar' btn2= ''/>
      <Popup h1='Movimentação' img='flex' nome= 'none' valor= 'none' file= 'none' type= 'flex ' motivo= 'flex' descricao= 'none' quantidade= 'flex' btn1= 'Fazer Movimentação' btn2= 'Fechar'/>
      */}
    </main>
    </>
  );
};

export default Catalog;