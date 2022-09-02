const users = "https://localhost:7256/Users";
const products = "https://localhost:7256/Products";

export const environment = {
  production: false,
  endpoints :{
    product: {
      getAll :products+ "/GetAll",
      post: products+"/Post",
      delete: products+"/Delete?id=",
      get: products+"/Get",
      update: products+"/Update"
    },
    user:{
      register:  users+"/register",
      login: users+"/login",
      getAll :users+"/getAll",
      post: users+"/Admins/post",
      delete: users+"/Admins/delete?id=",
      get: users+"/Admins/get",
      update: users+"/Admins/Update"
    }
  }
};


