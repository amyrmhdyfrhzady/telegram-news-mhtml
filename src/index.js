import config from "./config.js";
import { fetchChannel } from "./browser.js";
import { sendFile } from "./bale.js";
import { info, error } from "./logger.js";

(async () => {
    info("Job started");

    for (const channel of config.channels) {
        try {
            const { file } = await fetchChannel(channel);

            await sendFile(channel, file);

            info(`${channel.name} sent successfully`);
        } catch (err) {
            error(`${channel.name}: ${err.message}`);
        }
    }

    info("Job finished");
})();
