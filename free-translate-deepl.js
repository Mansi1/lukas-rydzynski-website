const puppeteer = require('puppeteer');

const getTranslationMap = (transKey) => {
  let newTransKey = transKey;
  const replacements = (transKey.match(/{{([^}]+)}}/g) || []).reduce((prev, curr, index) => {
    return {
      ...prev,
      ['{{' + index + '}}']: curr,
    };
  }, {});

  for (const replacement of Object.entries(replacements)) {
    newTransKey = newTransKey.split(replacement[1]).join(replacement[0]);
  }

  return {
    rawKey: transKey,
    key: newTransKey,
    replacements,
  };
};
const TRANSLATION_END = '\r\n';
const getTranslation = async (browser, from, to, text) => {
  const page = await browser.newPage();

  const { key, replacements } = getTranslationMap(text);
  const paramText = encodeURI(key).split('/').join('%5C%2F');
  const url = `https://www.deepl.com/translator#${from}/${to}/${paramText}`;
  await page.goto(url);

  await page.evaluate(() => {
    // click ok on google consent
    const button = document.querySelector('form[action="https://consent.google.com/s"] button');
    if (button) {
      button.click();
    }
  });
  await page.waitForSelector('div.lmt__inner_textarea_container[title]');
  // Get the "viewport" of the page, as reported by the page.
  let translation = await page.evaluate(() => {
    return document.querySelector('section[dl-test=translator-target] textarea').parentElement.querySelector('div')
      .textContent;
  });

  Object.keys(replacements)
    .sort(function (a, b) {
      return b.length - a.length;
    })
    .forEach((v) => {
      translation = translation.split(v).join(replacements[v]);
    });

  if (translation.endsWith(TRANSLATION_END) && !text.endsWith(TRANSLATION_END)) {
    translation = translation.substring(0, translation.length - TRANSLATION_END.length);
  }

  if (translation.endsWith('.') && !text.endsWith('.')) {
    translation = translation.substring(0, translation.length - '.'.length);
  }
  await page.close();
  return translation;
};

const translate = async (text, { from, to }) => {
  const browser = await puppeteer.launch({ headless: true });

  let translation;
  if (Array.isArray(text)) {
    translation = await Promise.all(
      text.map(async (txt) => {
        const trans = await getTranslation(browser, from, to, txt.key);
        return {
          key: txt.key,
          trans,
          ns: txt.ns,
        };
      }),
    );
  } else {
    const trans = await getTranslation(browser, from, to, text.key);
    translation = {
      key: text.key,
      trans,
      ns: text.ns,
    };
  }

  await browser.close();
  return translation;
};

exports.translate = translate;
