import { instance } from ".";

export const register = async (regObj) => {
  const { data, error } = await instance.post("auth/local/register", regObj);
  console.log(data, "data");
  if (error) throw new Error(error.message);

  console.log(data);
  return data;
};

export const login = async (logObj) => {
  const { email: identifier, password } = logObj;
  return await instance.post("auth/local", { identifier, password });
};
