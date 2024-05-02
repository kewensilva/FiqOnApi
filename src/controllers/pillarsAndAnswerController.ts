
import axios from "axios";
import "dotenv/config";
const urlEndPoint = `${process.env.URL_ENDPOINT_LIST}`;
const urlEndPointAnswer = `${process.env.URL_ENDPOINT_REQUEST}`;
export async function Pillars(token: string): Promise<string[]> {
  const getPillar: string[] = [];
  async function AllPages(page: number = 0): Promise<void> {
    try {
      const response = await axios.get(urlEndPoint, {
        params: { page, api_token: token }
      });
      getPillar.push(response.data.data);
      if (response.data.more_items === 'true') {
        await AllPages(parseInt(response.data.next_page));
      }
    } catch (error) {
      throw error;
    }
  }
  await AllPages();
  return getPillar
}
export async function sendAnswer(apiToken: string, answer: string): Promise<string> {
  try {
    const response = await axios.post(
      urlEndPointAnswer,answer,{params: {api_token: apiToken}
      }
    );
    return response.data.message;
  } catch (error) {
    throw new Error(`Erro ao enviar a resposta: ${Error}`);
  }
}