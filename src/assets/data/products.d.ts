
// @ts-ignore
declare module "../../assets/data/products" {
  export interface Product {
    id: number;
    name: string;
    image: string;
    transparentImage?: string;
    description: string;
    price: string;
  }

  export const products: Product[];
}