/*

Implement a function in JavaScript that converts the HEXA color codes to RGB numbers.

 Example
 Input:
 "#ff33ff"

 Output:
 {
   "r": 255,
   "g": 51,
   "b": 255
 }

https://learnersbucket.com/examples/interview/convert-hex-color-to-rgb-in-javascript/

*/

function hexToRgb(hexCode) {
  return {
    r: parseInt(hexCode.slice(1, 3), 16),
    g: parseInt(hexCode.slice(3, 5), 16),
    b: parseInt(hexCode.slice(5, 7), 16),
  };
}
console.log(hexToRgb("#ff33ff"));

/*
{
  "r": 255,
  "g": 51,
  "b": 255
}
*/
