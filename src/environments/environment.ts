const users = "https://localhost:7256/Users";
const products = "https://localhost:7256/Products";
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
      getAll :products+ "/GetAll"
    },
    user:{
      register:  users+"/register",
      login: users+"/login"
    },
    order:{
      post: orders+"/post"
    },
    player:{
      getAll :players+"/getAll",
      get: players+"/get",
      getTeamPlayers:players+"/getTeamPlayers?id="
    },
    team:{
      getAll :teams+"/getAll",
      get: teams+"/get",
    },
    match:{
      getAll :matchs+"/GetAll",
      get: matchs+"/get",
    },
    tournament:{
      getAll :tournaments+"/getAll",
      get: tournaments+"/get",
    },
    blog:{
      getAll :blogs+"/getAll",
      get: blogs+"/get",
    }
  }
};

