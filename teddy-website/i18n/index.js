var en = require("./en.json");
var de = require("./de.json");
var fr = require("./fr.json");
var ch = require("./ch.json");
var jp = require("./jp.json");
var es = require("./es.json");
var it = require("./it.json");
var el = require("./el.json");

const i18n = {
  translations: {
    en,
    de,
    fr,
    ch,
    jp,
    es,
    it,
    el,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;
