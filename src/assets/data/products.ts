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
    "id": 10,
    "name": "Mercedes Benz G63",
    "image": "/images/Mercedes-Benz-G63.jpg",
    "transparentImage": "",
    "description": "O Mercedes-AMG G63 é um SUV que combina esportividade, ótima performance no off-road e luxo1. Ele possui um motor V8 4.0 Biturbo de 585 cv de potência e 86,7 kgf.m de torque12. O G63 vai de 0 a 100 km/h em 4,5 segundos, mesmo pesando mais de duas toneladas e meia",
    "price": "1.869.900,00"
  },

  {
    "id": 1,
    "name": "BMW Série 4 Coupé",
    "image": "/images/Coupé-Bmw-Azul.jpg",
    "transparentImage": "",
    "description": "O BMW Série 4 Coupé é um modelo de quatro portas com estética afilada, materiais de alta qualidade e novidades em serviços e conectividade1. O modelo M4 CS Coupé é um modelo especial exclusivo com desempenho sem compromissos, motor a gasolina M TwinPower Turbo de 6 cilindros em linha High Performance, transmissão desportiva de 8 velocidades M Steptronic otimizada com Drivelogic, tração integral M xDrive com diferencial ativo M e excelente dinâmica de condução na pista de corrida e na utilização quotidiana",
    "price": "1.399.950"
  },

  {
    "id": 2,
    "name": "Chevrolet Corvette ZR1",
    "image": "/images/Lamborghini-Aventador.jpg",
    "transparentImage": "/images/Lamborghini-Aventador.jpg",
    "description": "O Chevrolet Corvette Z06 é um cupê com motor V8 que se destaca por sua potência, desempenho e design. Ele possui um motor naturais e um chassis balanceado que envia poder para as rodas trais. Os freios frontais são de 6 pistões e os traseiros de 4 pistões. A velocidade máxima é de 330 km/h",
    "price": "754.121"
  },

  {
    "id": 3,
    "name": "Range Rover Evoque",
    "image": "/images/Land-Rover-Range-Rover-Suv.jpg",
    "transparentImage": "",
    "description": "O Range Rover Evoque oferece opções avançadas de motor, incluindo um elétrico híbrido plug-in (PHEV) para condução 100% elétrica sem emissões de escape, bem como opções de motores a gasolina e diesel1. Os motores padrão incluem 2.0, eD4, SD4, Si4 e TD4",
    "price": "450.000"
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
    "name": "Mercedes-Benz Classe A",
    "image": "/images/Hatchback-Mercedes-Benz-Azul.jpg",
    "transparentImage": "",
    "description": "O Mercedes-Benz Classe A é um híbrido plug-in que combina um motor a gasolina de quatro cilindros com uma inovadora transmissão elétrica1. Ambos os modelos contam com o novo e eficiente motor 4 cilindros turbo com dois litros e 224 cv2. O novo Classe A é dinâmico, jovem, maior e mais confortável do que nunca",
    "price": "574.900"
  },
  
  {
    "id": 7,
    "name": "Hyundai Santa Fe",
    "image": "/images/Hyundai (2).jpg",
    "transparentImage": "",
    "description": "O novo Santa Fé com motor turbo, híbrido, 1.6 capaz de atingir até 178 cv de potência e 27 kgfm de torque. O câmbio será automático de 6 velocidades. Quem quiser mais potência pode optar pelo motor turbo de 2,5 litros movido a gasolina. Este produz 277 cv e 43 kgfm",
    "price": "322.338"
  },

  {
    "id": 8,
    "name": "Jeep Cherokee",
    "image": "/images/Jeep-Cherokee.jpg",
    "description": "O Jeep Cherokee é um SUV com motor de dianteiro e tração nas quatro rodas ou tração dianteira. Ele possui cinco níveis de potência disponíveis, incluindo um motor de 2 litros a gasolina e um motor de 3,2 litros a gasolina. O motor a gasolina tem 271 cv de potência e um torque máximo de 32,2 kgfm, proporcionando uma condução ágil tanto na cidade quanto em estradas mais desafiadoras13. O Jeep Cherokee é conhecido por sua robustez, design icônico e capacidade de enfrentar terrenos difíceis4",
    "price": "200.000"
  },

  {
    "id": 9,
    "name": "Mercedes Benz AMG GT",
    "image": "/images/Mercedes-Benz-AMG-GT.jpg",
    "transparentImage": "",
    "description": "O Mercedes Benz AMG GT está disponível em duas motorizações: gasolina e Plug-In Hybrid. O motor V8 biturbo promete fazer vibrar qualquer entusiasta automóvel2. O novo AMG GT 63 4 Matic tem um motor de 4.0 litros de capacidade, 8 cilindros em V e 585 cavalos de potência. O carro atinge 315 km/h de velocidade máxima e cumpre o tradicional arranque dos 0 aos 100 km/h em apenas 3,2 segundos1",
    "price": "1.700.000"
  },

  {
    "id": 11,
    "name": "Mercedes-Benz CLA",
    "image": "/images/mercedes-benz.jpg",
    "transparentImage": "",
    "description": "O Mercedes-Benz CLA é um compacto da família Classe A, com quatro portas e disponível em duas motorizações: CLA 200 AMG Line e Mercedes-AMG CLA 35 4MATIC12. O CLA Coupé 2025 é um exemplo de design sofisticado e tecnologia avançada, com linhas elegantes e aerodinâmicas",
    "price": "700.000"
  },

  {
    "id": 12,
    "name": "Rolls Royce Ghost",
    "image": "/images/White-Rolls-Royce-Ghost.jpg",
    "transparentImage": "",
    "description": "O Rolls-Royce Ghost 6.6 V12 Automatic tem um motor a gasolina de 6,6 litros, com 570 cavalos de potência e 820 Nm de torque. A transmissão é uma de 8 velocidades com tração traseira. O tempo de aceleração de 0 a 100 km/h é de 4,0 segundos. O Ghost tem 5,4 metros de comprimento e quase 2 metros de largura. O motor é um robusto V12 de 6592 cm³, com 570 cv e torque de 79,5 kgfm a 1500 rpm",
    "price": "7.000.000"
  },

]