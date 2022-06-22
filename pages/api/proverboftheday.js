import readJsonFile from '../../utils/reader';

const getDayOfTheYear = function () {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day
}

async function getDailyQuote() {
  const quotes = await readJsonFile('refranes.json');
  var dayOfTheYear = getDayOfTheYear();
  return new Promise((resolve, reject) => {
    console.log(dayOfTheYear);
    resolve(quotes[dayOfTheYear % quotes.length]);
  })
}

export default async function handler(req, res) {
  getDailyQuote()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
}
