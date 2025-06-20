function tournamentWinner(competitions, results) {
  // Write your code here.
  //brute force, use for loop, initiate scoretable, bestteam and score and loop each comp
  //make a winningteam from results array (if 1 home if 0 away)
  //add 3 for every winning, and when winningteamscore is better than bestscore replace it.
  let score = {};
  let bestTeam = "";
  let bestScore = 0;

  for (let i = 0; i < competitions.length; i++) {
    let [homeTeam, awayTeam] = competitions[i];

    let winningTeam = results[i] === 1 ? homeTeam : awayTeam;

    if (!score[winningTeam]) {
      score[winningTeam] = 0;
    }
    score[winningTeam] += 3;

    if (score[winningTeam] > bestScore) {
      bestScore = score[winningTeam];
      bestTeam = winningTeam;
    }
  }
  return bestTeam;
}

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
results = [0, 0, 1];
//python

competitions2 = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
];
results2 = [0, 1, 1];
//java

console.log(tournamentWinner(competitions, results));
console.log(tournamentWinner(competitions2, results2));
