import { instance } from ".";

export const getAllProducts = async ({
  limit,
  page,
  query,
  minPrice,
  maxPrice,
}) => {
  const res = await instance.get("products", {
    params: {
      limit,
      page,
      query: query === "" ? null : query,
      price: { $and: [{ $gte: minPrice }, { $gte: maxPrice }] },
    },
  });
  return res;
};
