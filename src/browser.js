import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";

import config from "./config.js";
import { info, error } from "./logger.js";

const MAX_RETRIES = 3;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchChannel(channel) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    let browser;

    try {
      info(`Opening ${channel.name} (Attempt ${attempt})`);

      browser = await chromium.launch({
        headless: config.browser.headless,
      });

      const page = await browser.newPage({
        viewport: config.browser.viewport,
      });

      await page.goto(channel.url, {
        waitUntil: "networkidle",
        timeout: config.browser.timeout,
      });

      await page.waitForTimeout(config.browser.waitAfterLoad);

      await fs.mkdir(config.output.folder, {
        recursive: true,
      });

      const client = await page.context().newCDPSession(page);

      const snapshot = await client.send("Page.captureSnapshot");

      const file = path.join(
        config.output.folder,
        `${channel.name}${config.output.extension}`,
      );

      await fs.writeFile(file, snapshot.data, "utf8");

      await browser.close();

      info(`${channel.name} captured`);

      return {
        file,
      };
    } catch (e) {
      lastError = e;

      error(`${channel.name}: ${e.message}`);

      if (browser) {
        await browser.close();
      }

      if (attempt < MAX_RETRIES) {
        await sleep(3000);
      }
    }
  }

  throw lastError;
}
