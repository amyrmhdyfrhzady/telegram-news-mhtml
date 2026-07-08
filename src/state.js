import fs from "fs/promises";

const FILE = "state.json";

export async function loadState() {
  try {
    const data = await fs.readFile(FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return {};
  }
}

export async function saveState(state) {
  await fs.writeFile(FILE, JSON.stringify(state, null, 4), "utf8");
}

export function getLastMessageId(state, channel) {
  return state[channel]?.lastMessageId ?? 0;
}

export function setChannelState(state, channel, lastMessageId, hash) {
  state[channel] = {
    lastMessageId,
    hash,
  };
}
