import express from "express";
import "dotenv/config";
import routes from "./routes";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(`${process.env.PORT}`, ()=>{
  console.log(`servidor Online no endereço: http://localhost:${process.env.PORT}`); 
});