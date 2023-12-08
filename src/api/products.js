import { instance } from ".";

export const getAllProducts = async () => {
  const res = await instance.get("products?populate=*");
  // const data = await
  return res;
};
