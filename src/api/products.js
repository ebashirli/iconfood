import { instance } from ".";

export const getAllProducts = async () => {
  const res = await instance.get("products");
  return res;
};
