const users = "https://localhost:7256/Users";
const products = "https://localhost:7256/Products";

export const environment = {
  production: false,
  endpoints :{
    product: {
      getAll :products+ "/GetAll",
      post: products+"/Delete",
      delete: products+"/Update",
      get: products+"/Get",
      update: products+"/Post"
    },
    user:{
      register:  users+"/register",
      login: users+"/login",
      getAll :users+ "/getAll",
      post: users+"/Admins/Delete",
      delete: users+"/Admins/Update",
      get: users+"/Admins/Get",
      update: users+"/Admins/Post"
    }
  }
};


