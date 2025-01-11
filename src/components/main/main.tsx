import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import { Products } from "./products"
import { Header } from "../header/header";
import { Bounce, ToastContainer, toast } from "../../../node_modules/react-toastify/dist/index";
import 'react-toastify/dist/ReactToastify.css';

export function Main(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    background-color: #303030;
    margin: auto;
  
  `

  useEffect(() => {
  const toastDisplayed = localStorage.getItem('toastDisplayed');

  if (!toastDisplayed) {
    toast('Este site foi desenvolvido apenas para fins de demonstração. Não realizamos vendas reais de produtos', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    localStorage.setItem('toastDisplayed', 'true');
  }
  }, []);

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <Container>
        <Products searchTerm={searchTerm} />
      </Container>
      <ToastContainer/>
    </>
  )
}