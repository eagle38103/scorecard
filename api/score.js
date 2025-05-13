let scoreData = {
  team1: "Team A",
  team2: "Team B",
  batter1: "Batter 1",
  batter2: "Batter 2",
  batter1Score: 0,
  batter2Score: 0,
  batter1Balls: 0,
  batter2Balls: 0,
  striker: "batter1",           // current striker
  nonStriker: "batter2",        // current non-striker
  runs: 0,                      // total runs
  wickets: 0,                   // total wickets
  balls: 0,                     // balls in current over (0 to 5)
  overs: 0.0,                   // overs in 0.1 format (e.g., 4.2)
  history: []                   // for undo functionality
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
