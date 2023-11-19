import { instance } from ".";

export const register = async (regObj) => {
  const result = await instance.post("auth/local/register", regObj);

  return result.data;
};

export const login = async (logObj) => {
  const result = await instance.post("auth/local/login", logObj);

  return result.data;
};
