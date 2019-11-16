
const finalPosition = (moves) => {
  var position = [0,0]
  for (var move of moves) {
    switch(move) {
      case('north'):
        position[1]++
        break;
      case('south'):
        position[1]--
        break;
      case('east'):
        position[0]++
        break;
      case('west'):
        position[0]--
        break;
    }
  }
  return position
}
