
import { useEffect, useState } from "react"
import React from "react";
// @ts-ignore
import { products as productData } from "../../assets/data/products"
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}


interface ProductsProps {
  searchTerm: string;
}

  const dotBlink = keyframes`
    0% { content: "Carregando Produtos." }
    33% { content: "Carregando Produtos.."; }
    66% { content: "Carregando Produtos..."; }
    100% { content: "Carregando Produtos"; }
  `
  
  const Container = styled.div<{ isLoading: boolean }>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #303030;
    justify-content: center;
    gap: 20px;
    background: ${({ isLoading }) => (isLoading ? "#303030" : "#303030")};
`

  const SubContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    border-radius: 50px;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
      color: red;
    }
  
  `
  const ProductCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 1px 1px 3px #7d0f7c;
    width: 300px;
    height: 300px;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
      background: #4d4d4d;
      transform: scale(1.02);
    }

    > a > img {
      width: 250px;
      transition: transform 0.3s ease;
      border-radius: 5px;
    }

    &:hover > a > img {
      transform: scale(1.02);
    }

    p {
      font-size: 1.2em;
      text-align: center;
      color: white;
    }

    h3 {
      color: white;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #8080808f;
    }

  `

  const LoadingText = styled.h1`
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ocupa a altura total da janela */
    width: 100%; /* Garante que ocupa toda a largura */

    &::after {
      content: "Carregando Produtos";
      animation: ${dotBlink} 1.5s steps(3, end) infinite;
    }
`


export function Products( {searchTerm }: ProductsProps ) {
  const [products, setProducts]= useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData);
      setLoading(false);
    }, 200)
  }, [])





  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container isLoading={loading}>
      {loading ? (
        <LoadingText></LoadingText>
      ): (
      <SubContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}> 
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>R$: {product.price}</p>
              {/* <p>{product.description}</p> */}
            </Link>
          </ProductCard>
        ))}
      </SubContainer>
      )}
    </Container>
  )
}