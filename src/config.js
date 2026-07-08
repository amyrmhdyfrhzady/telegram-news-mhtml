export default {
  channels: [
  {
    name: "Vahid",
    url: "https://t.me/s/VahidOnline",
  },
  {
    name: "IranIntl",
    url: "https://t.me/s/IranintlTV",
  },
  {
    name: "BBC Persian",
    url: "https://t.me/s/bbcpersian",
  },
  {
    name: "Radio Farda",
    url: "https://t.me/s/radiofarda_official",
  },
  {
    name: "VOA Persian",
    url: "https://t.me/s/farsivoa",
  },
  {
    name: "Manoto",
    url: "https://t.me/s/ManotoTV",
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
