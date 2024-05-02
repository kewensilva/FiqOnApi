import express from "express";
import { authenticate } from "../controllers/authController";
import { Pillars, concatenateAndEncodePillars, sendAnswer } from "../controllers/pillarsAndAnswerController";
const routes = express.Router();
routes.get('/api/Fiqon', async (req, res) => {
  try {
    const apiToken = await authenticate();
    const pillars = await Pillars(apiToken);
    const encodedPillars = await concatenateAndEncodePillars(pillars);
    const response = await sendAnswer(apiToken, encodedPillars);
    res.send(response);
  } catch (error) {
    console.error("Erro na requisição:", Error);
    res.status(500).send("Erro na requisição");
  }
});
export default routes;