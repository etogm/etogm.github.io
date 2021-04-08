class Player {
  constructor(name, goals, passes) {
    this.name = name;
    this.goals = goals;
    this.passes = passes;
  }
}

let players = [
  new Player('Player1', 22, 44),
  new Player('Player2', 2, 11),
  new Player('Player3', 21, 66),
];

function getAllGoals(players) {
  let count = 0;

  players.forEach(player => {
    count += player.goals;
  });

  return count;
}

function getStatistics(players) {
  let allGoals = getAllGoals(players);

  players.forEach(player => {
    player.coefficient = player.goals * 2 + player.passes;
    player.percent = Math.round((player.goals / allGoals) * 100);
  });

  return players;
}

console.log(getStatistics(players));
