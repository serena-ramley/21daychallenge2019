const checkAir = function (samples, threshold) {

  var numClean = 0;
  var numDirty = 0;
  
  for (var sample of samples) {
    switch(sample) {
      case 'clean':
        numClean++;
        break;
      case 'dirty':
        numDirty++;
        break;
    }
  }
  
  var proportionDirty = numDirty / (numDirty + numClean);
  
  if (proportionDirty > threshold) {
    return 'Polluted';
  }
  else
    return 'Clean';
}
