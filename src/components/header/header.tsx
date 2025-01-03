import styled from "styled-components"
import React from "react"
import { SearchIcon } from "../icons/SearchIcons";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}
  const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgba(126, 10, 126, 0.2);
    width: 100vw;
    min-height: 70px;
    padding-bottom: 20px;
    box-shadow: 0 2px 10px #d6d0d6;
    margin-bottom: 10px;
    z-index: 10;

    @media (max-width: 768px) {
      width: 100vw;
      min-height: 40px;
      padding-bottom: 10px;
  }
  `

  const Title = styled.h1`
    color: white;
  
  `


  const SearchBar = styled.input`
    flex-grow: 1;
    border: none;
    background: none;
    color: #d6d0d6;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    height: 100%;

    &::placeholder {
  }

  @media (max-width: 768px) {
    padding-bottom: 10px;
    min-height: 60px;
  }
  `

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: none;
  border: 1px solid #d6d0d6;
  width: 550px;
  height: 40px;
  border-radius: 2px;

@media (max-width: 768px) {
  width: 350px;
  height: 35px;
}

`
const IconWrapper = styled.div`
  padding: 0 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding-bottom: 2px;
    min-height: 15px;
  }
`


export function Header({ onSearch }: HeaderProps) {

  return (
    <Container>
      <Title>
        Store Car
      </Title>
      <SearchWrapper>   
        <SearchBar 
            type="text"
            placeholder="Pesquisar Produtos"
            onChange={(e) => onSearch(e.target.value)}
            
        />

        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </SearchWrapper>
    </Container>
  )
}