import { ENDPOINTS } from "../constants";

export const fetchAllCakes = async () => {
  const response = await fetch(ENDPOINTS.CAKES);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch all cakes");
  }

  return data;
};
