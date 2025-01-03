import { useParams } from "react-router-dom";
// @ts-ignore
import { products } from "../../assets/data/products";
import React from 'react';
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}


export function ProductDetails(): JSX.Element {
  const dotBlink = keyframes`
    0% { content: "Carregando." }
    33% { content: "Carregando.."; }
    66% { content: "Carregando..."; }
    100% { content: "Carregando"; }
  
  `


  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    setTimeout(() => {
      const foundProduct = products.find((p: Product) => p.id === parseInt(id || "", 10))
      setProduct(foundProduct || null);
      setLoading(false);
    }, 200)
  }, [id])




  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #303030;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1200px;;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      flex-direction: column;
    }
  `;

  const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: #303030;
    padding: 30px;
    gap: 50px;
    box-shadow: 1px 1px 3px #a3a3a3;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      flex-direction: column;
      gap: 20px;

    }
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      flex-direction: column;
      gap: 20px;

     img {
      width: 100%;
     }

     div:nth-of-type(2) {
      max-width: 880px;
    }

  }

    div:first-of-type {
      margin: auto;

    img {
      width: 700px;
      box-shadow: 1px 1px 3px #a3a3a3;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      img {
        width: 100%;
      }
    }

  }

  div:nth-of-type(2) {
    h1 {
      font-family: "Roboto", serif;
      font-weight: 500;
      font-style: normal;
      text-align: center;
      color: white;
      font-size: 1.4rem;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
      justify-content: center;
      flex-direction: column;
    }

    p:first-of-type {
      font-family: "Montserrat", serif;
      font-optical-sizing: auto;
      font-weight: 400;
      color: white;
      font-style: normal;
      text-align: justify;
    }

    p:nth-of-type(2) {
      font-family: "Montserrat", serif;
      font-optical-sizing: auto;
      color: white;
      font-size: 2rem;
      text-align: center;
      font-weight: 300;
      font-style: normal;
    }

    div {
      margin: auto;
      button {
        box-shadow: 1px 1px 3px #a3a3a3;
        background: #00BFFF;
        color: white;
        border-radius: 2px;
        border: none;
        font: inherit;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        transition: background 0.5s ease; /* Adiciona a transição */

        &:hover {
          background: #005FAF;
        }
      }
    }

    
  }

  `;

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
      content: "Carregando";
      animation: ${dotBlink} 2s steps(3, end) infinite;
    }
  `;
  
  if (loading) {
    return (
      <Container>
        <LoadingText />
      </Container>
    );
  }

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <Container>
      <SubContainer>
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>R$: {product.price}</p>

          <div>
            <button>Compra</button>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
}