const festivalColours = color1 => {
  var color2 = (color1 + 150 < 360) ? (color1 + 150) : (color1 + 150 - 360)
  var color3 = (color1 + 210 < 360) ? (color1 + 210) : (color1 + 210 - 360)
  return (color2 < color3) ? [color2, color3] : [color3, color2]
}
