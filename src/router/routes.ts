import express from "express";
import { authenticate } from "../controllers/authController";
import { Pillars, sendAnswer} from "../controllers/pillarsAndAnswerController";
import { log } from "console";

const routes = express.Router();

routes.get('/api/fiqon', async (req, res) => {
  try {
    const apiToken = await authenticate();
    const pillars = await Pillars(apiToken);
    const concatenatedPillars = pillars.concat().toString();
    const base64Pillars = Buffer.from(concatenatedPillars).toString('base64');
    const response = await sendAnswer(apiToken, base64Pillars);
    res.send(response);
  } catch (error) {
    console.error("Erro na requisição:", Error);
    res.status(500).send("Erro na requisição");
  }
});

export default routes;
