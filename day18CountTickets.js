const countTickets = (tickets) => {
  var count = {
    red: 0,
    green: 0,
    blue: 0
  }
  for (var ticket of tickets) {
    switch (ticket) {
      case 'red':
        count.red++
        break;
      case 'green':
        count.green++
        break;
      case 'blue':
        count.blue++
        break;
    }
  }
  return count;
}

const bestOdds = (tickets, raffleEntries) => {
  const bestChanceColor = Object.entries(countTickets(tickets))
      .map(([color, count]) => [color, count / raffleEntries[color]])
      .reduce(([winnerColor, winnerChances], [nextColor, nextChances]) =>
        nextChances > winnerChances ? [nextColor, nextChances] : [winnerColor, winnerChances]
      )[0];
  return `You have the best odds of winning the ${bestChanceColor} raffle.`;
}
