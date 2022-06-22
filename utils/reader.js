import fs from 'fs'

export default function readJsonFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(JSON.parse(data))
        }
        })
    })
}