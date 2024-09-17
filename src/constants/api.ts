export const API =
  "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api";

export const ENDPOINTS = {
  CAKES: `${API}/cakes`,
  CAKE: (cakeId: string) => `${API}/cakes/${cakeId}`,
};
