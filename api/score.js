let scoreData = {
  team1: "Team A",
  team2: "Team B",
  batter1: "Batter 1",
  batter2: "Batter 2",
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
    scoreData = { ...scoreData, ...req.body };
    res.status(200).json({ message: "Score updated" });
  } else {
    res.status(405).end();
  }
}
