export interface Product {
  id: number;
  name: string;
  image: string;
  transparentImage?: string;
  description: string;
  price: string;
}



export const products: Product[] = [
  {
    "id": 1,
    "name": "Coupé Bmw",
    "image": "/images/Coupé-Bmw-Azul.jpg",
    "transparentImage": "",
    "description": "Hello",
    "price": ""
  },

  {
    "id": 2,
    "name": "Lamborghini Aventador",
    "image": "/images/Lamborghini-Aventador.jpg",
    "transparentImage": "/images/Lamborghini-Aventador.jpg",
    "description": "O Lamborghini Aventador é um carro esportivo de motor central produzido pela fabricante italiana Automobili Lamborghini, é o substituto do Murciélago. Ele é equipado com um motor 6.5 V12 que gera 700 cavalos de potência com o uso intensivo em fibra de carbono. O Aventador tem um desempenho estimado para fazer 0–100 km/h em 2,9 segundos e velocidade máxima limitada é de 350 km/h",
    "price": "9.360.388"
  },

  {
    "id": 3,
    "name": "Range Rover",
    "image": "/images/Land-Rover-Range-Rover-Suv.jpg",
    "transparentImage": "",
    "description": "",
    "price": ""
  },

  {
    "id": 4,
    "name": "Mercedes Benz Eq",
    "image": "/images/Mercedes-Benz-Eq.jpg",
    "transparentImage": "",
    "description": "O Mercedes-Benz EQE é um carro elétrico com motor de 245 cv e 56,1 kgfm, alimentado por uma bateria de 89 kWh que permite até 367 km de autonomia. Ele possui uma carroceria SUV e uma transmissão automática de 1 velocidade13. O Mercedes-Benz EQE 2025 é movido por um motor elétrico de 292 cv e 57,6 kgfm, com aceleração de 0 a 100 km/h em 6,5 segundos e velocidade máxima de 210 km/h2. O Mercedes-Benz EQE tem 4,95 mm de comprimento e preços a partir de 69,750.00€. Ele tem uma autonomia de 623 km (WLTP) e 245 km na versão 300 Edition4.",
    "price": "1.340.286"
  },

  {
    "id": 5,
    "name": "Mercedes Benz G Class",
    "image": "/images/Mercedes-Benz-G-Class.jpg",
    "transparentImage": "",
    "description": "A Mercedes-Benz Classe G é um SUV motor de dianteiro e tração a todas as rodas1. Ela foi produzida pela Mercedes entre 2018 e 2024. Há quatro níveis de potência disponíveis: um motor 2,9 L Linha 6 Turbo diesel ou um motor 4 L V8 BiTurbo gasolina1. O modelo traz inovações no quesito assistência ao motorista e tecnologias, mantendo sua essência de robustez e luxo",
    "price": "2.004.290"
  },

  {
    "id": 6,
    "name": "",
    "image": "/images/pexels-autorecords-10550012",
    "transparentImage": "",
    "description": "",
    "price": ""
  },

  {
    "id": 7,
    "name": "",
    "image": "",
    "transparentImage": "",
    "description": "",
    "price": ""
  },
  
  {
    "id": 8,
    "name": "",
    "image": "",
    "transparentImage": "",
    "description": "",
    "price": ""
  },

  {
    "id": 9,
    "name": "",
    "image": "",
    "description": "",
    "price": ""
  },

  {
    "id": 10,
    "name": "",
    "image": "",
    "transparentImage": "",
    "description": "",
    "price": ""
  },

]