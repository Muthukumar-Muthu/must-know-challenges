// Implement a function in JavaScript that converts the RGB number to HEXA color codes.

// https://learnersbucket.com/examples/interview/convert-rgb-to-hex-color-in-javascript/

function rgbToHex(a, b, c) {
  const hex = "#" + a.toString(16) + b.toString(16) + c.toString(16);
  return hex;
}

console.log(rgbToHex(255, 51, 255));

//"#ff33ff"
