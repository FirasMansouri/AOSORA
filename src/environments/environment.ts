const users = "https://localhost:7256/Users";
const products = "https://localhost:7256/Products";
const orders = "https://localhost:7256/Orders"

export const environment = {
  production: false,
  endpoints :{
    product: {
      getAll :products+ "/GetAll"
    },
    user:{
      register:  users+"/register",
      login: users+"/login"
    },
    order:{
      post: orders+"/post"
    }
  }
};

