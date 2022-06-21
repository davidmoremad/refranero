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
  
export default function handler(req, res) {
    const quotes = ReadJsonFile('refranes.json');
    quotes
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
}
