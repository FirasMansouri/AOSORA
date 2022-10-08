const users = "https://localhost:7256/Users";
const products = "https://localhost:7256/Products";
const files = "https://localhost:7256/Upload";
const orders = "https://localhost:7256/Orders";
const players= "https://localhost:7256/Users/Players";
const teams = "https://localhost:7256/Teams";
const matchs = "https://localhost:7256/Matchs";
const tournaments = "https://localhost:7256/Tournaments";
const blogs = "https://localhost:7256/Blogs";

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
      update: users+"/Admins/put"
    },
    file:{
      UploadFile: files+"/UploadFile",
      getFile:files+"/"
    },
    order:{
      getAll: orders+"/getAll"
    },
    player:{
      getAll :players+"/getAll",
      post: players+"/post",
      delete: players+"/delete?id=",
      get: players+"/get",
      update: players+"/put",
      getTeamPlayers:players+"/getTeamPlayers?id="
    },
    team:{
      getAll :teams+"/getAll",
      post: teams+"/Post",
      delete: teams+"/delete?id=",
      get: teams+"/get",
      update: teams+"/put"
    },
    match:{
      getAll :matchs+"/GetAll",
      post: matchs+"/post",
      delete: matchs+"/delete?id=",
      get: matchs+"/get",
      update: matchs+"/put"
    },
    tournament:{
      getAll :tournaments+"/getAll",
      post: tournaments+"/post",
      delete: tournaments+"/delete?id=",
      get: tournaments+"/get",
      update: tournaments+"/put"
    },
    blog:{
      getAll :blogs+"/getAll",
      post: blogs+"/post",
      delete: blogs+"/delete?id=",
      get: blogs+"/get",
      update: blogs+"/put"
    }
  }
};


