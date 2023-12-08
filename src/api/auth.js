import { instance } from ".";

export const register = async (regObj) => {
  console.log(regObj);
  const { data, error } = await instance.post("auth/register", regObj);
  if (error) throw new Error(error.message);

  return data;
};

export const login = async (logObj) => {
  const { email, password } = logObj;
  return await instance.post("auth/login", { email, password });
};
