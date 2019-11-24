
const judgeVegetable = (vegetables, metric) => {
  return   vegetables.reduce( (winner, contestant) =>
                          contestant[metric] > winner[metric] ? contestant : winner).submitter
}
