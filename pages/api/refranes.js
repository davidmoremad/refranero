import ReadJsonFile from '../../utils/reader';

export default function handler(req, res) {
    const quotes = ReadJsonFile('refranes.json');
    quotes
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
}
