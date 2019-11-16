
const lightsOn = function(lights) {
  for (var light of lights) {
    light.on = true;
  }
  return lights;
}

const lightsOff = function(lights) {
  for (var light of lights) {
    light.on = false;
  }
  return lights;
}

const toggleLights = function(lights, lightsAreOn) {
  if (lightsAreOn) {
    return lightsOff(lights);
  }
  else
    return lightsOn(lights);
  
}
