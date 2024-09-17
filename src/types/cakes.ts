export interface BaseCake {
  name: string;
  comment: string;
  imageUrl?: string;
  yumFactor: YumFactor;
}
export interface Cake extends BaseCake {
  id: number;
}

export type CakesList = Cake[];

export interface CakesResponse {}

export type YumFactor = 1 | 2 | 3 | 4 | 5;
