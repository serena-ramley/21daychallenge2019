const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  var basePrice = 1.00;
  var surchargeNumPeople = 30;
  
  var price = basePrice + distanceCharge(distanceTraveled) + surcharge(numberOfPeople);
  return "$" + price.toFixed(2);
}


const surcharge = (numberOfPeople) => {

  var maxPeople = 30;
  var surcharge = 0.25;
  
  if (numberOfPeople < maxPeople) {
    return 0.00;
  }
  else
    return surcharge;
}

const distanceCharge = (distanceTraveled) => {
  var ratePerKM = 0.25;
  return ratePerKM * distanceTraveled;
}
