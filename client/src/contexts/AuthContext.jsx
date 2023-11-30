import { createContext, useContext, useReducer } from "react";

import { login as loginApi, register as registerApi } from "../api/auth";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "register":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action type");
  }
}

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  async function register(regObj) {
    const { data, error } = await registerApi(regObj);
    if (error) throw new Error(error.message);
    console.log(data);
    dispatch({ type: "register", payload: "data" });
  }

  async function login(email, password) {
    console.log(1);
    const { data, error } = await loginApi({ email, password });
    console.log(data);
    if (error) throw new Error(error.message);
    console.log(data);
    dispatch({ type: "login", payload: data });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
