/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const test = new SearchConfigTest({
  identifier: "amazon",
  default: {
    // Not included anywhere.
  },
  available: {
    included: [{
      // We don't currently enforce by region, but do locale instead.
      // regions: [
      //   "at", "au", "be", "ca", "ch", "de", "fr", "gb", "ie", "it", "jp", "nl",
      //   "us",
      // ],
      locales: {
        matches: [
          "ach", "af", "ar", "as", "az", "bg", "bn", "bn-IN", "br", "cak", "cy",
          "da", "de", "dsb", "el", "eo", "es-AR", "eu", "fa", "ff", "fr",
          "ga-IE", "gd", "gl", "gn", "gu-IN", "hr", "hsb", "hy-AM", "ia", "is",
          "it", "ja-JP-mac", "ja", "ka", "km", "kn", "lij", "lt", "mai", "mk",
          "ml", "mr", "ms", "my", "nb-NO", "nn-NO", "or", "pa-IN", "pt-PT", "ro",
          "si", "son", "sq", "sr", "ta", "te", "th", "tl", "trs", "ur", "uz",
          "wo", "zh-CN",
        ],
        startsWith: ["en"],
      },
    }],
  },
  details: [{
    // Note: These should be based on region, but we don't currently enforce that.
    // Note: the order here is important. A region/locale match higher up in the
    // list will override a region/locale match lower down.
    domain: "amazon.com.au",
    aliases: ["@amazon"],
    included: [{
      regions: ["au"],
      locales: {
        matches: [
          "ach", "af", "ar", "as", "az", "bg", "bn-IN", "cak", "eo", "en-US",
          "en-ZA", "es-AR", "fa", "gn", "hy-AM", "ia", "is", "ka", "km", "lt",
          "mk", "ms", "my", "ro", "si", "th", "tl", "trs", "uz",
        ],
      },
    }, {
      regions: ["au"],
      locales: {
        matches: [
          "cy", "da", "el", "en-GB", "eu", "ga-IE", "gd", "gl", "hr", "nb-NO",
          "nn-NO", "pt-PT", "sq", "sr",
        ],
      },
    }],
    noSuggestionsURL: true,
  }, {
    domain: "amazon.ca",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: ["ca", "en-CA"],
      },
    }, {
      regions: ["ca"],
      locales: {
        matches: [
          "ach", "af", "ar", "as", "az", "bg", "bn-IN", "cak", "eo", "en-US",
          "en-ZA", "es-AR", "fa", "gn", "hy-AM", "ia", "is", "ka", "km", "lt",
          "mk", "ms", "my", "ro", "si", "th", "tl", "trs", "uz",
        ],
      },
    }, {
      regions: ["ca"],
      locales: {
        matches: [
          "br", "fr", "ff", "son", "wo",
        ],
      },
    }],
    noSuggestionsURL: true,
  }, {
    domain: "amazon.fr",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: ["br", "fr", "ff", "son", "wo"],
      },
    }, {
      regions: ["fr"],
      locales: {
        matches: [
          "ach", "af", "ar", "as", "az", "bg", "bn-IN", "cak", "eo", "en-US",
          "en-ZA", "es-AR", "fa", "gn", "hy-AM", "ia", "is", "ka", "km", "lt",
          "mk", "ms", "my", "ro", "si", "th", "tl", "trs", "uz",
        ],
      },
    }],
    excluded: [{regions: ["ca"]}],
    searchUrlCode: "tag=firefox-fr-21",
    noSuggestionsURL: true,
  }, {
    domain: "amazon.co.uk",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: [
          "cy", "da", "el", "en-GB", "eu", "ga-IE", "gd", "gl", "hr", "nb-NO",
          "nn-NO", "pt-PT", "sq", "sr",
        ],
      },
    }, {
      regions: ["gb"],
      locales: {
        matches: [
          "ach", "af", "ar", "as", "az", "bg", "bn-IN", "cak", "eo", "en-US",
          "en-ZA", "es-AR", "fa", "gn", "hy-AM", "ia", "is", "ka", "km", "lt",
          "mk", "ms", "my", "ro", "si", "th", "tl", "trs", "uz",
        ],
      },
    }],
    excluded: [{regions: ["au"]}],
    searchUrlCode: "tag=firefox-uk-21",
    noSuggestionsURL: true,
  }, {
    domain: "amazon.com",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: [
          "ach", "af", "ar", "as", "az", "bg", "bn-IN", "cak", "eo", "en-US",
          "en-ZA", "es-AR", "fa", "gn", "hy-AM", "ia", "is", "ka", "km", "lt",
          "mk", "ms", "my", "ro", "si", "th", "tl", "trs", "uz",
        ],
      },
    }],
    excluded: [{regions: ["au", "ca", "fr", "gb"]}],
    searchUrlCode: "tag=mozilla-20",
  }, {
    domain: "amazon.cn",
    included: [{
      locales: {
        matches: ["zh-CN"],
      },
    }],
    searchUrlCode: "ix=sunray",
    noSuggestionsURL: true,
  }, {
    domain: "amazon.co.jp",
    aliases: ["@amazon"],
    included: [{
      locales: {
        startsWith: ["ja"],
      },
    }],
    searchUrlCode: "tag=mozillajapan-fx-22",
    noSuggestionsURL: true,
  }, {
    domain: "amazon.de",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: ["de", "dsb", "hsb"],
      },
    }],
    noSuggestionsURL: true,
  }, {
    domain: "amazon.in",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: [
          "bn", "gu-IN", "kn", "mai", "ml", "mr", "or", "pa-IN", "ta",
          "te", "ur",
        ],
      },
    }],
    noSuggestionsURL: true,
  }, {
    domain: "amazon.it",
    aliases: ["@amazon"],
    included: [{
      locales: {
        matches: ["it", "lij"],
      },
    }],
    searchUrlCode: "tag=firefoxit-21",
    noSuggestionsURL: true,
  }],
});

add_task(async function setup() {
  // We only need to do setup on one of the tests.
  await test.setup();
});

add_task(async function test_searchConfig_amazon() {
  await test.run();
});