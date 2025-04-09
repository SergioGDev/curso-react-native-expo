import { getExpoGoProjectConfig } from "expo";
import { User } from "../interfaces/user";
import { productsApi } from "../api/productsApi";

export interface AuthResponse {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const returnUserToken = (
  data: AuthResponse
): {
  user: User;
  token: string;
} => {
  // const { id, email, fullName, isActive, roles, token } = data;
  const { token, ...user } = data;

  return {
    user,
    token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();
  try {
    const { data } = await productsApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const { data } = await productsApi.get<AuthResponse>("/auth/check-status");
    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    throw new Error("Error al verificar el estado de autenticación");
  }
};

// TODO: Tarea - hacer el register
