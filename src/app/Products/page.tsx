"use client";
import MainBar from "@/components/MainBar/page";
import styles from "./Products.module.css";
import api from "@/services/api";
import { Product } from "@/types/Interface";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'; // Importa useSearchParams
import { FaRegStar } from "react-icons/fa";

const Products = () => {
  const searchParams = useSearchParams(); // Obtém os parâmetros da URL
  const id = searchParams.get('id'); // Pega o ID da query string
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null); // Altera para um objeto do tipo Product ou null

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      try {
        console.log(id);
        const res = await api.get(`/Produtos/ID/${id}`); // Use o ID obtido da URL
        const data: Product = res.data[0]
        setProduct(data); // Define o produto recebido
        console.log(data)
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductById(); // Chama a função para buscar o produto específico se o ID estiver disponível
    }
  }, [id]);

  return (
    <>
      <MainBar />
      <main className={styles.main}>
        <div className={styles.container}>
          {loading && <p>Carregando...</p>}
          {product ? ( // Verifica se product não é null
            <>
              <img src={product.img} alt="" />
              <div className={styles.content}>
                <h2>ID - {product.id}</h2>
                <h2>Categoria do Produto - {product.categoria}</h2>
                <h1>{product.nome}</h1>
                <div className={styles.casing}>
                  <h1>R$ {product.preco}</h1>
                  <div className={styles.line}></div>
                  <div className={styles.box}>
                    <FaRegStar className={styles.star} />
                    <FaRegStar className={styles.star} />
                    <FaRegStar className={styles.star} />
                    <FaRegStar className={styles.star} />
                    <FaRegStar className={styles.star} />
                  </div>
                  <div className={styles.line}></div>
                  <p>{product.qAval} Reviews</p>
                </div>
                <p>{product.descricao}</p>
              </div>

            </>
          ) : (
            <p>Carregando</p> // Mensagem caso o produto não esteja disponível
          )}
        </div>
      </main>
    </>
  );
};

export default Products;