
const PI = 3.14159 

const sphereVolume = function (r) {
    return (4 / 3) * PI * Math.pow(r, 3)
}

const coneVolume = function (r, h) {
  return r*r*h*1.047
}

const prismVolume = function (h, w, d) {
  return h*w*d
}

const totalVolume = function (solids) {
  total = 0;
  for (var part of solids) {
    switch (part.type) {
      case "sphere":
        total += sphereVolume(part.radius);
        break;
      case "cone":
        total += coneVolume(part.radius, part.height);
        break;
      case "prism":
        total += prismVolume(part.height, part.width, part.depth);
        break;
    }
  }
  return total;
}
