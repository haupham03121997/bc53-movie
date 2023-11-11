import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MyIsIkhldEhhblN0cmluZyI6IjMwLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNDQzNTIwMDAwMCIsIm5iZiI6MTY4Njc2MjAwMCwiZXhwIjoxNzE0NTgyODAwfQ.vnuwKd2yPstVSFqQxog9sPBbe9pu5_XdZksPn83M0Hs",
  },
});

export default fetcher;
