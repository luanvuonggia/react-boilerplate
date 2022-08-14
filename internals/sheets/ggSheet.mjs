import { execSync } from 'child_process';
import path from 'path';

import chalk from 'chalk';
import pkg from 'fs-extra';
import { JWT } from 'google-auth-library';
import { google } from 'googleapis';

import { DEFAULT_LOCALE, LANGUAGES } from '../../src/i18n/index.mjs';

import creds from './arctic-eye-337515-1039cd03b79b.json' assert { type: 'json' };
import config from './config.json' assert { type: 'json' };

const { outputJsonSync, readJsonSync, pathExistsSync } = pkg;
const sheets = google.sheets('v4');
const GOOGLE_AUTH_SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/spreadsheets',
];

const getPath = relativePath => path.join(process.cwd(), relativePath);
const ensureFileSync = path => {
  if (!pathExistsSync(getPath(path))) {
    outputJsonSync(path, {});
  }
  return;
};

async function googleAuth() {
  const client = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: GOOGLE_AUTH_SCOPES,
  });
  await client.authorize();
  return client;
}

async function getSpreadsheets({ id, authClient }) {
  try {
    const response = (
      await sheets.spreadsheets.get({ spreadsheetId: id, auth: authClient })
    ).data;
    // TODO: Change code below to process the `response` object:
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function createSpreadsheets(authClient) {
  const permission = {
    type: 'domain',
    role: 'writer',
    domain: 'orgos.net',
  };
  const request = {
    resource: {
      // TODO: Add desired properties to the request body.
      properties: {
        title: 'Translations',
      },
    },

    auth: authClient,
  };
  const drive = google.drive({
    version: 'v3',
    auth: authClient,
  });

  try {
    const response = (await sheets.spreadsheets.create(request)).data;
    // TODO: Change code below to process the `response` object:

    await drive.permissions.create({
      resource: permission,
      fileId: response.spreadsheetId,
      fields: 'id',
    });
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function batchGetValues({ id, authClient, title }) {
  const request = {
    spreadsheetId: id,
    majorDimension: 'COLUMNS',
    ranges: [title],
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.batchGet(request)).data;
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function batchUpdateValues({ id, authClient, data }) {
  const request = {
    // The ID of the spreadsheet to update.
    spreadsheetId: id, // TODO: Update placeholder value.

    resource: {
      valueInputOption: 'RAW',
      data,
    },

    auth: authClient,
  };

  try {
    await sheets.spreadsheets.values.batchUpdate(request);
    // TODO: Change code below to process the `response` object:
  } catch (err) {
    console.error(err);
  }
}

async function sheetStyles({ id, authClient, meta, sheetId }) {
  const request = {
    requests: [
      {
        repeatCell: {
          range: {
            sheetId,
            startRowIndex: 0,
            endRowIndex: 1,
            startColumnIndex: 0,
            endColumnIndex: meta.endColumnIndex,
          },
          cell: {
            userEnteredFormat: {
              backgroundColor: {
                red: 0.7,
                green: 0.7,
                blue: 0.7,
              },
              textFormat: {
                foregroundColor: {
                  red: 0.0,
                  green: 0.0,
                  blue: 0.0,
                },
                fontSize: 12,
                bold: true,
              },
            },
          },
          fields: 'userEnteredFormat(backgroundColor,textFormat)',
        },
      },
      {
        repeatCell: {
          range: {
            sheetId,
            startRowIndex: 0,
            endRowIndex: meta.endRowIndex,
            startColumnIndex: 0,
            endColumnIndex: meta.endColumnIndex,
          },
          cell: {
            userEnteredFormat: {
              wrapStrategy: 'WRAP',
            },
          },
          fields: 'userEnteredFormat(wrapStrategy)',
        },
      },
      {
        updateDimensionProperties: {
          range: {
            sheetId,
            dimension: 'COLUMNS',
            startIndex: 0,
            endIndex: meta.endColumnIndex,
          },
          properties: {
            pixelSize: 300,
          },
          fields: 'pixelSize',
        },
      },
    ],
  };

  try {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: id,
      resource: request,
      auth: authClient,
    });
    // TODO: Change code below to process the `response` object:
  } catch (err) {
    console.error(err);
  }
}

function jsonToSheetData(tabName) {
  ensureFileSync(`i18n/lang/${DEFAULT_LOCALE}.json`);
  const defaultLanguageJson = readJsonSync(
    `src/i18n/lang/${DEFAULT_LOCALE}.json`
  );
  const mapData = Object.keys(defaultLanguageJson).reduce((acc, key) => {
    acc[key] = LANGUAGES.reduce((prev, lang) => {
      if (lang.code === DEFAULT_LOCALE) {
        prev[lang.code] = defaultLanguageJson[key] || '';
      } else {
        ensureFileSync(`i18n/lang/${lang.code}.json`);
        prev[lang.code] =
          readJsonSync(`src/i18n/lang/${lang.code}.json`)[key] || '';
      }
      return prev;
    }, {});
    return acc;
  }, {});

  const values = Object.keys(mapData).map(key => [
    key,
    ...Object.values(mapData[key]),
  ]);

  const header = ['ID', ...LANGUAGES.map(lang => lang.name), 'Note'];

  const range = `${tabName}!A2:${String.fromCharCode(LANGUAGES.length + 65)}${
    values.length + 1
  }`;
  return {
    meta: {
      endRowIndex: values.length + 1,
      endColumnIndex: header.length,
    },
    data: [
      {
        range: `${tabName}!A1:${String.fromCharCode(header.length + 64)}1`,
        values: [header],
      },
      {
        range,
        values,
      },
    ],
  };
}

function sheetDataToJson(values) {
  const idColumn = values[0];
  return LANGUAGES.reduce((acc, lang) => {
    const data = values.find(v => v[0] === lang.name) || {};
    acc[lang.code] = idColumn.reduce((prev, id, index) => {
      if (id !== 'ID' && data[index]) {
        prev[id] = data[index];
      }
      return prev;
    }, {});
    return acc;
  }, {});
}

async function syncInfoWithConfig({
  spreadsheetData,
  spreadsheetId,
  authClient,
}) {
  spreadsheetData = await getSpreadsheets({
    id: spreadsheetId,
    authClient,
  });
  outputJsonSync(`internals/sheets/config.json`, spreadsheetData);
  return spreadsheetData;
}

async function push(id, tabIndex = 1) {
  try {
    let spreadsheetData = config;
    let spreadsheetId = id || config.spreadsheetId;

    const authClient = await googleAuth();
    if (spreadsheetId) {
      spreadsheetData = await syncInfoWithConfig({
        spreadsheetData,
        spreadsheetId,
        authClient,
      });
    } else {
      execSync('pnpm i18n:extract');
      spreadsheetData = await createSpreadsheets(authClient);
    }

    const { title, sheetId } = spreadsheetData.sheets[tabIndex - 1].properties;

    const { data, meta } = jsonToSheetData(title);
    await batchUpdateValues({
      id: spreadsheetData.spreadsheetId,
      authClient,
      data,
    });
    await sheetStyles({
      id: spreadsheetData.spreadsheetId,
      authClient,
      meta,
      sheetId,
    });
    console.info(
      chalk.green(`spreadsheetUrl:`, spreadsheetData.spreadsheetUrl)
    );
  } catch (error) {
    console.error(chalk.red(error));
  }
}

async function pull(id, tabIndex = 1) {
  try {
    execSync('pnpm i18n:extract');
    let spreadsheetData = config;
    let spreadsheetId = id || config.spreadsheetId;

    if (spreadsheetId) {
      const authClient = await googleAuth();
      spreadsheetData = await syncInfoWithConfig({
        spreadsheetData,
        spreadsheetId,
        authClient,
      });
      const { title } = spreadsheetData.sheets[tabIndex - 1].properties;

      const { valueRanges } = await batchGetValues({
        id: spreadsheetId,
        authClient,
        title,
      });
      const values = valueRanges[0].values;
      const languagesJson = sheetDataToJson(values);

      for (const lang of LANGUAGES) {
        ensureFileSync(`i18n/lang/${lang.code}.json`);
        const localLang = await readJsonSync(`src/i18n/lang/${lang.code}.json`);
        const newLang = { ...localLang, ...languagesJson[lang.code] };
        await outputJsonSync(`src/i18n/lang/${lang.code}.json`, newLang);
      }

      execSync('pnpm i18n:compile');

      console.info(
        chalk.green(`Success: Sync data from google sheets has been completed!`)
      );
    } else {
      console.error(
        chalk.red(
          `Error: spreadsheetId is not exists. Please add --id to the command or add 'spreadsheetId' field to internals/sheets/config.json`
        )
      );
    }
  } catch (error) {
    console.error(chalk.red(error));
  }
}

// exports.push = push;
// exports.pull = pull;

export { push, pull };
