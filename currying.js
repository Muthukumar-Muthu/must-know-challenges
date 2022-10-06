/* Write a function that satisfies the following.

add(1)(2).value() = 3; 
add(1, 2)(3).value() = 6; 
add(1)(2)(3).value() = 6; 
add(1)(2) + 3 = 6;

*/

//
// return a object with value method to get results of the parameters

function add(...p1) {
  let sum = p1.reduce((p, c) => {
    return p + c;
  }, 0);
  function fun(...p2) {
    return add(...p1, ...p2);
  }
  fun.value = () => {
    return sum;
  };
  fun.valueOf = () => sum;
  return fun;
}

console.log(add(1)(2).value());
console.log(add(1, 2)(3).value());
console.log(add(1)(2)(3).value());
console.log(add(1)(2) + 3);

//link - https://learnersbucket.com/examples/interview/currying-part-3/
