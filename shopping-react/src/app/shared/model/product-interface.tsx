export interface productAttribute {
  id: string;
  name: string;
  url: string;
  color: string;
  size: string;
  price: number;
  discount: number;
  quantity: number;
}

export interface productInCartAttribute {
  id: string;
  quantity: number;
}