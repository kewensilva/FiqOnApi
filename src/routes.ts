import express from "express";
import { authenticate } from "./controllers/authController";
import { Pillars, sendAnswer } from "./controllers/pillarsAndAnswerController";
const routes = express.Router();
routes.get('/api/Fiqon', async (req, res) => {
  try {
    const apiToken = await authenticate();
    console.log('API Token:', apiToken);
    const pillars = await Pillars(apiToken);
    console.log('Pilares:', pillars);
    const concatenatedPillars = pillars.concat().toString()
    console.log('Pilares Concatenados:', concatenatedPillars);
    const base64Pillars = Buffer.from(concatenatedPillars).toString('base64');
    console.log('Pilares Base64:', base64Pillars);
    const response = await sendAnswer(apiToken, base64Pillars);
    console.log('Resposta da API:', response);
    res.send(response);
  } catch (error) {
    console.error('Erro:', Error);
    res.status(500).send('Erro interno do servidor');
  }
});
export default routes;