import axios from "axios";
import FormData from "form-data";
import fs from "fs";

import { info, error } from "./logger.js";

const TOKEN = process.env.BALE_BOT_TOKEN;
const CHAT_ID = process.env.BALE_CHAT_ID;

const api = axios.create({
  baseURL: `https://tapi.bale.ai/bot${TOKEN}`,

  timeout: 60000,
});

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendFile(filePath) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const form = new FormData();

      form.append("chat_id", CHAT_ID);

      form.append("document", fs.createReadStream(filePath));

      const response = await api.post(
        "/sendDocument",

        form,

        {
          headers: form.getHeaders(),

          maxBodyLength: Infinity,

          maxContentLength: Infinity,
        },
      );

      if (!response.data.ok) {
        throw new Error(response.data.description ?? "Unknown Bale API error");
      }

      info("File sent successfully.");

      return response.data.result;
    } catch (e) {
      lastError = e;

      error(`Send failed (Attempt ${attempt}): ${e.message}`);

      if (attempt < 3) {
        await sleep(3000);
      }
    }
  }

  throw lastError;
}
