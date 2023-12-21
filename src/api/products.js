import { instance } from ".";

export const getAllProducts = async ({ limit, page, name }) => {
  const res = await instance.get(
    `products?limit=${limit}&page=${page}${name ? "?name=" + name : ""}`
  );
  return res;
};
