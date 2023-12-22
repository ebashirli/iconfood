import { instance } from ".";

export const getAllProducts = async ({ limit, page, query, sort }) => {
  const res = await instance.get("products", {
    params: {
      limit,
      page,
      query: query === "" ? null : query,
      sort,
    },
  });
  return res;
};
