
const whereCanIPark = (spots, vehicle) => {

  for (let y = 0; y < spots.length; y++) {
    console.log('SPOTS: ', spots[y])
    
    for (let x = 0; x < spots[y].length; x++) {
      console.log('SPOT: ', spots[y][x])
      
      const spot = spots[y][x]
      
      if (vehicle === 'regular') {
        if (spot === 'R') {
          return [x, y]
        }
      }
      else if (vehicle === 'small') {
        if (spot === 'R' || spot === 'S') {
          return [x, y]
        }
        
      }
      else if (vehicle === 'motorcycle') {
        if (spot === 'R' || spot === 'S' || spot === 'M') {
          return [x, y]
        }
        
      }
    }
    
  }
  
  return false
}
