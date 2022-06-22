import readJsonFile from '../../utils/reader';

export default function handler(req, res) {
  readJsonFile('refranes.json')
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
}
