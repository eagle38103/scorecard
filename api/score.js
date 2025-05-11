// api/score.js
let scoreData = null;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      scoreData = req.body;
      return res.status(200).json({ message: 'Score updated' });
    } catch (e) {
      return res.status(400).json({ error: 'Invalid data' });
    }
  } else if (req.method === 'GET') {
    return res.status(200).json(scoreData || {});
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
