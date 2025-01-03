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
    width: 1200px;
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