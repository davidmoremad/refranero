import fs from 'fs'

export function ReadJsonFile(filePath) {
  return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
          if (err) {
              reject(err);
          } else {
              return resolve(JSON.parse(data));
          }
      });
  });
}

export async function GetRandomQuote() {
  return new Promise((resolve, reject) => {
    const quotes = ReadJsonFile('refranes.json');
    quotes
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return resolve(data[randomIndex]);
      })
      .catch(err => reject(err));
  });
}

export default async function handler(req, res) {
  try {
    const result = await GetRandomQuote()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
