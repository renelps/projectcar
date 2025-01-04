import { Link, useParams } from "react-router-dom";
// @ts-ignore
import { products } from "../../assets/data/products";
import React from 'react';
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { BackIcon } from "../icons/back-icon";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: linear-gradient(
    to left, /* Direção do gradiente da esquerda para a direita */
    rgba(126, 10, 126, 0.2), /* Cor com transparência */
    #05017d /* Cor sólida */
  );

  h1 {
    margin: auto;
    color: white;
  }

`;

const ProductsContainer = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  max-width: 1200px;
  box-shadow: 1px 1px 5px white;
  gap: 30px;
  border-radius: 3px;
  margin-top: 50px;


  
  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmall}) and (max-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
     flex-direction: column;
     margin-top: 20px;
     box-shadow: none;
     gap: 5px;
    }
`;
const ImageContainer = styled.div`
  display: flex;
  max-width: 700px;
    img {
    width: 100%;
    box-shadow: 1px 1px 7px #ece6ec;
    border-radius: 3px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmall}) and (max-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    flex-direction: column;
    max-width: 700px;
    img {
      margin: auto;
      width: 85%;
  }
  }
`;
const IconContainer = styled.div`
  padding-right: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmall}) and (max-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    padding-left: 10px;
  }
`;

const DetailsContainer = styled.div`
  padding: 0 30px;
  max-width: 350px;

  h1 {
    text-align: center;
    font-size: 1.6em;
    color: white;
  }

  p:first-of-type {
    text-align: justify;
    font-family: ${({theme}) => theme.fontFamily.primary};
    color: white;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmall}) and (max-width: ${({ theme }) => theme.breakpoints.largeTablet}) {
    padding: 15px;
    max-width: 550px;
    margin: auto;
    width: 95%;

  h1 {
    text-align: center;
    font-size: 1.4em;
    color: white;
  }

  p:first-of-type {
    text-align: justify;
    color: white;
  }


  }
  
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza no eixo horizontal */
  justify-content: center; /* Centraliza no eixo vertical */
  width: 100%;
  height: 100%;
  
  p {
    text-align: center;
    color: white;
    padding: 5px 0;
    font-size: 1.6em;
  }
  
  button {
    width: 100%;
    box-shadow: 1px 1px 7px #ece6ec;
    cursor: pointer;
    padding: 10px 0;
    background: #05017d;
    color: white;
    border: none;
    &:hover {
      background: #0a03a7;
    }
  }
`;



const dotBlink = keyframes`
  0% { content: "Carregando." }
  33% { content: "Carregando.."; }
  66% { content: "Carregando..."; }
  100% { content: "Carregando"; }
  
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
    content: "Carregando";
    animation: ${dotBlink} 2s steps(3, end) infinite;
  }
`;

export function ProductDetails(): JSX.Element {
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
      <HeaderContainer><h1>Store Car</h1></HeaderContainer>
      <ProductsContainer>
        <ImageContainer>
          <IconContainer>
            <Link to="/">
              <BackIcon />
            </Link>
          </IconContainer>
          <img src={product.image} alt={product.name} />
        </ImageContainer>
        <DetailsContainer>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <ActionsContainer>
            <div>
              <p>R$: {product.price}</p>
            </div>
            <button>Compra</button>
          </ActionsContainer>
        </DetailsContainer>
      </ProductsContainer>
    </Container>
  );
}