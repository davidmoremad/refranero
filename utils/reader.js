import fs from 'fs'

export default function ReadJsonFile(filePath) {
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