const fs = require('fs');
const path = require('path');
const jsonStringify = require('json-stable-stringify');

const { translate } = require('./free-translate-deepl');
const { writeFileSync } = require('fs');

const TRANSLATION_FILES_DIR = path.join(__dirname, 'src', 'assets', 'i18n');
const DEFAULT_LANGUAGE = 'de';

const chunk = (arr, size = 500) => {
  const copy = [...arr];
  const results = [];
  while (copy.length) {
    results.push(copy.splice(0, size));
  }
  return results;
};

const getTranslationMap = (transKey) => {
  let counter = 1;
  let newTransKey = transKey;
  const replacements = (transKey.match(/{{([^}]+)}}|<\/([0-9]+)>|<([0-9]+)>/g) || []).reduce((prev, curr, index) => {
    counter = counter + 1;
    const isDollar = counter % 2 === 0;
    return {
      ...prev,
      [Array(index + 3)
        .fill(isDollar ? '$' : '&')
        .join('')]: curr,
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
const main = async () => {
  //read default language
  const translationFiles = fs
    .readdirSync(TRANSLATION_FILES_DIR)
    .filter((f) => f.endsWith('.json') && !f.endsWith(DEFAULT_LANGUAGE+'.json'))
    .map((fileName) => {
      const language = fileName.substring(0, fileName.indexOf('.'));
      const directory = path.join(TRANSLATION_FILES_DIR, fileName);
      return {
        language,
        directory,
        data: JSON.parse(fs.readFileSync(directory).toString('utf8')),
      };
    });

  const languageMap = translationFiles.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.language]: curr.data,
    }),
    {},
  );
  const defaultLanguage = JSON.parse(fs.readFileSync(path.join(TRANSLATION_FILES_DIR, DEFAULT_LANGUAGE+'.json')).toString('utf8'));
  const missingTranslations = {};
  for (const namespace of Object.keys(defaultLanguage)) {
    const translations = Object.keys(defaultLanguage[namespace]);
    for (const translation of translations) {
      for (const transFile of translationFiles) {
        const { language, data } = transFile;
        if (!data[namespace] || !data[namespace][translation]) {
          missingTranslations[language] = missingTranslations[language] || [];
          missingTranslations[language].push({ ns: namespace, key: translation });
        }
      }
    }
  }
  for (const language of Object.keys(missingTranslations)) {
    const translations = missingTranslations[language];
    let count = 0;
    console.log(language + ' ' + count + '/' + translations.length);
    const missingChunks = chunk(translations, 20);
    for (const chunk of missingChunks) {
      const data = await translate(chunk, { from: DEFAULT_LANGUAGE, to: language });
      for (const date of data) {
        languageMap[language][date.ns] = languageMap[language][date.ns] || {};
        languageMap[language][date.ns][date.key] = date.trans;
      }
      count += data.length;
      writeFileSync(
        path.join(TRANSLATION_FILES_DIR, language + '.json'),
        jsonStringify(languageMap[language], { space: 2 }),
      );
      console.log(language + ' ' + count + '/' + translations.length);
    }
  }
  writeFileSync(
      path.join(TRANSLATION_FILES_DIR, DEFAULT_LANGUAGE + '.json'),
      jsonStringify(defaultLanguage, { space: 2 }),
  );
  console.log('done');
}

main();
