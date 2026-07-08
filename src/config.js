export default {
  channels: [
    {
      name: "VahidOnline",
      url: "https://t.me/s/VahidOnline",
    },

    // مثال:
    // {
    //     name: "Tasnim",
    //     url: "https://t.me/s/TasnimNews"
    // }
  ],

  browser: {
    headless: true,

    timeout: 60000,

    waitAfterLoad: 3000,

    viewport: {
      width: 1440,
      height: 900,
    },
  },

  output: {
    folder: "./temp",

    extension: ".mhtml",
  },
};
