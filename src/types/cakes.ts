export interface Cake {
  id: number;
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: number;
}

export type CakesList = Cake[];

export interface CakesResponse {}
