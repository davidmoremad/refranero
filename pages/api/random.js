import readJsonFile from '../../utils/reader';

async function getRandomQuote() {
	return new Promise((resolve, reject) => {
		const quotes = readJsonFile('refranes.json');
		quotes
			.then(data => {
				const randomIndex = Math.floor(Math.random() * data.length);
				resolve(data[randomIndex]);
			})
			.catch(err => reject(err));
	});
}

export default async function handler(req, res) {
	getRandomQuote()
		.then(quote => res.status(200).json(quote))
		.catch(err => res.status(500).json(err));
}
