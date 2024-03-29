import axios from "axios";

const BASE_URL = "https://youtube-backend-93iq.onrender.com/";

const user = JSON.parse(localStorage.getItem("root"))?.user;
console.log(user);
var TOKEN;
  const currentUser = user && JSON.parse(user).currentUser;
  TOKEN = currentUser?.token;
  console.log(TOKEN);


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// export const API_URL = 
// // window.location.hostname.includes("localhost")
//     // ? 
//     "http://localhost:4000" 
//     // : "/node";

//     export const CLIENT_URL = window.location.hostname.includes("localhost")
//     ? "http://localhost:3000" 
//     : "/";
