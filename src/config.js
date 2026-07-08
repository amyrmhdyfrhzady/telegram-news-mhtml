export default {
  channels: [
  {
    name: "Vahid",
    url: "https://t.me/s/VahidOnline",
  },
  {
    name: "Iran",
    url: "https://t.me/s/IranintlTV",
  },
  {
    name: "BBP",
    url: "https://t.me/s/bbcpersian",
  },
  {
    name: "R Farda",
    url: "https://t.me/s/radiofarda_official",
  },
  {
    name: "V Persian",
    url: "https://t.me/s/farsivoa",
  },
  {
    name: "Man",
    url: "https://t.me/s/ManotoTV",
  },
  {
    name: "توضیحات و نحوه استفاده از پروژه",
    url: "https://github.com/amyrmhdyfrhzady/telegram-news-mhtml/blob/main/README.md",
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
