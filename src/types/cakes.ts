export interface BaseCake {
  name: string;
  comment: string;
  imageUrl?: string;
  yumFactor: number;
}
export interface Cake extends BaseCake {
  id: number;
}

export type CakesList = Cake[];

export interface CakesResponse {}
