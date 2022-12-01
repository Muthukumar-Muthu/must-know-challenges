function compare(arg1, arg2) {
  //is array

  if (typeof arg1 !== typeof arg2) return false;
  let result;

  if (
    Array.isArray(arg1) &&
    Array.isArray(arg2) &&
    arg1.length === arg2.length
  ) {
    for (let i = 0; i < arg1.length; i++) {
      result = compare(arg1[i], arg2[i]);
      if (result === false) return result;
    }
    return result;
  } else if (typeof arg1 === "function") return typeof arg1 === typeof arg2;
  else if (typeof arg1 === "object") {
    //object

    for (const key in arg1) {
      result = compare(arg1[key], arg2[key]);
      if (result === false) return result;
    }
    return result;
  }
  //primitive
  return arg1 === arg2;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 2, 4, 5];
console.log(compare(arr1, arr2));
// returns false

let arrObj1 = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: 3,
    d: function () {
      console.log("abcd");
    },
  },
  4,
  5,
];
let arrObj2 = [
  1,
  2,
  {
    c: 3,
    b: 2,
    a: 1,
    d: function () {
      console.log("abcd");
    },
  },
  4,
  5,
];
console.log(compare(arrObj1, arrObj2));
// returns true

let arr4 = [
  [1, 2],
  [3, 4, 5],
];
let arr3 = [
  [1, 2],
  [3, 4, 5],
];
console.log(compare(arr4, arr3));
// returns true

//https://learnersbucket.com/examples/array/compare-two-array-or-object-with-javascript/
