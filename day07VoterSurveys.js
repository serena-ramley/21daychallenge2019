
const termTopics = (interviews) => {
  
  let priorities = [0,0,0]

  for (var i = 0; i < interviews.length; i++){
    switch(interviews[i]) {
      case 'smart city' :
        priorities[0]++
        break;
      case 'arts funding' :
        priorities[1]++
        break;
      case 'transportation' :
        priorities[2]++
        break;
      default:
        break;
    }
  }
  return priorities
}
