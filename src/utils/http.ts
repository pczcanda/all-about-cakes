import { ENDPOINTS } from "../constants";
import { BaseCake, Cake } from "../types";

export const fetchAllCakes = async () => {
  const response = await fetch(ENDPOINTS.CAKES);

  const data = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch all cakes");
  }

  return data;
};

export const postNewCake = async (newCake: BaseCake) => {
  const response = await fetch(ENDPOINTS.CAKES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...newCake }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("failed to add new cake");
  }

  return data.cake as Cake;
};
