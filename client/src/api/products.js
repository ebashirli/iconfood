import { instance } from ".";

export const getProducts = async () => {
  const res = await instance.get("products?populate=*");
  // const data = await
  return res;
};
