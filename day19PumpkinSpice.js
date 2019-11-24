
const pumpkinSpice = money => {
  var numPurchases = [0,0,0,0]
  
  var pie = Math.floor(money/5)
  var latte = Math.floor((money - 5*pie) / 3)
  var macaron = Math.floor((money - 5*pie) - (3*latte))
  var grams = 30*pie + 15*latte + 3*macaron
  
  numPurchases[0] = pie
  numPurchases[1] = latte
  numPurchases[2] = macaron
  numPurchases[3] = grams
  
  return numPurchases
  
}
