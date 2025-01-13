import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      helloWorld: "Hello World",
      hello: "Hello",
      newSite: "New Site",
    },
  },
  de: {
    message: {
      helloWorld: "Hallo Welt",
      hello: "Hallo",
      newSite: "Neue Seite",
    },
  },
  fr: {
    message: {
      helloWorld: "Bonjour le monde",
      hello: "Bonjour",
      newSite: "Nouveau site",
    },
  },
};

const i18n = createI18n({
  locale: "de",
  messages,
});

export default i18n;
