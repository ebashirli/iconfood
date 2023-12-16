import { instance } from ".";

export const getAllProducts = async ({ limit, page }) => {
  const res = await instance.get(`products?limit=${limit}&page=${page}`);
  return res;
};
