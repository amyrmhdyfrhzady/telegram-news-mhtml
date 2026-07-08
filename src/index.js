import config from "./config.js";

import { fetchChannel } from "./browser.js";
import { sendFile } from "./bale.js";

import { sha256 } from "./hash.js";

import {
  loadState,
  saveState,
  getLastMessageId,
  setChannelState,
} from "./state.js";

import { info, warn, error } from "./logger.js";

async function main() {
  const state = await loadState();

  for (const channel of config.channels) {
    try {
      info(`Checking ${channel.name}`);

      const { file, posts } = await fetchChannel(channel);

      if (!posts.length) {
        warn(`${channel.name}: no posts found`);

        continue;
      }

      const newestPost =
    posts[posts.length - 1];

const hash = sha256(

    JSON.stringify(

        posts.map(post => ({
            id: post.id,
            text: post.text,
            caption: post.caption
        }))

    )

);

      await sendFile(file);

      setChannelState(
        state,

        channel.name,

        newestPost.id,

        hash,
      );

      await saveState(state);

      info(`${channel.name}: ${newPosts.length} new post(s) processed`);
    } catch (e) {
      error(`${channel.name}: ${e.message}`);
    }
  }
}

main().catch(error);
