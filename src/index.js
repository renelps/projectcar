import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyleGlobal } from './styles/styleGlobal';
import { Main } from './components/main/main';
import { ProductDetails } from './components/main/ProductDetails';
import { ThemeProvider } from 'styled-components';
import { theme } from "./styles/theme"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <BrowserRouter>
      <StyleGlobal />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
