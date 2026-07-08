export default {
  channels: [
    {
      name: "Vahid",
      url: "https://t.me/s/VahidOnline",
    },
    {
      name: "test",
      url: "https://t.me/s/test_1388",
    },
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
