import { handleMessage } from "./messageHandler.js";
import { BOT_TOKEN } from "./config.js";

export async function handleWebhook(request) {

  const update = await request.json();

  if (!update.message)
    return new Response("ok");

  const result = await handleMessage(update.message);

  await fetch(
    `https://tapi.bale.ai/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: update.message.chat.id,
        text: result.text
      })
    }
  );

  return new Response("ok");
}
