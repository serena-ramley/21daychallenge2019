const busTimes = buses => {

  var waitTimes = {}
  
  for (var stop in buses){
    console.log(stop)
    var time = buses[stop].distance / buses[stop].speed
    waitTimes[stop] = time
  }
  return waitTimes
}
