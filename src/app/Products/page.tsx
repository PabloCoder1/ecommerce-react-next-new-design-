"use client";
import MainBar from "@/components/MainBar/page";
import styles from "./Products.module.css";
import api from "@/services/api";
import { Product } from "@/types/Interface";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'; // Importa useSearchParams

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
        const data: Product = res.data; // Verifique a estrutura do objeto
        console.log(data); // Verifique a estrutura do objeto
        setProduct(data); // Define o produto recebido
        console.log("Product set to:", data); // Verifique o que está sendo definido
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
            <div>
              <h1>{product.nome}</h1>
              <p>{product.descricao}</p>
              <p>Preço: {product.preco}</p>
            </div>
          ) : (
            <p>Nenhum produto encontrado.</p> // Mensagem caso o produto não esteja disponível
          )}
        </div>
      </main>
    </>
  );
};

export default Products;