import styled from "styled-components"
import React, { useState } from 'react';
import { Products } from "./products"
import { Header } from "../header/header";

export function Main(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; /* Agora o contêiner ocupa toda a largura */
    max-width: 1300px; /* Largura máxima, para não ultrapassar a largura da tela */
    background-color: #303030;
    margin: auto;
  
  `
  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Container>
        <Products searchTerm={searchTerm} />
      </Container>
    </>
  )
}