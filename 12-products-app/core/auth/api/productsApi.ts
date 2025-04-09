// TODO: Conectar mediante envs vars, Android e IOS

import axios from "axios";

const productsApi = axios.create({
  baseURL: "localhost:3000/api",
});

// TODO: Interceptores

export { productsApi };
