import express from "express";
import { authenticate } from "../controllers/authController";
import { Pillars, sendAnswer} from "../controllers/pillarsAndAnswerController";
const routes = express.Router();

routes.get('/api/fiqon', async (req, res) => {
  try {
    const apiToken = await authenticate();
    const pillars = await Pillars(apiToken);
    const concatenatedPillars = pillars.join(' ');
    console.log(concatenatedPillars);
    const base64Pillars = Buffer.from(concatenatedPillars).toString('base64');
    const response = await sendAnswer(apiToken, base64Pillars);
    res.send(response);
  } catch (error) {
    console.error("Erro na requisição:", Error);
    res.status(500).send("Erro na requisição");
  }
});

export default routes;
