let scoreData = {
  team1: "Team A",
  team2: "Team B",
  batter1: "-",
  batter2: "-",
  batter1Score: "0 (0)",
  batter2Score: "0 (0)",
  striker: "batter1",
  runs: 0,
  wickets: 0,
  overs: "0.0",
  bowler: "Bowler 1",
  bowlerBalls: 0,
  bowlerRuns: 0,
  bowlerWickets: 0
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(scoreData);
  } else if (req.method === 'POST') {
    // Update bowler data if present
    if (req.body.bowler !== undefined) scoreData.bowler = req.body.bowler;
    if (!isNaN(req.body.bowlerBalls)) scoreData.bowlerBalls = req.body.bowlerBalls;
    if (!isNaN(req.body.bowlerRuns)) scoreData.bowlerRuns = req.body.bowlerRuns;
    if (!isNaN(req.body.bowlerWickets)) scoreData.bowlerWickets = req.body.bowlerWickets;

    // Update other data
    scoreData = { ...scoreData, ...req.body };
    res.status(200).json({ message: "Score updated" });
  } else {
    res.status(405).end();
  }
}
