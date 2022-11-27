// https://learnersbucket.com/examples/interview/how-to-merge-objects-in-javascript/

//shallow merge

// shallow merge - only involving own properties & methods
const obj1 = {
  prop1: 1,
};
const obj2 = {
  prop2: 1,
};

let merged = { ...obj1, ...obj2 };

console.log("Using spread syntax", merged);

merged = Object.assign({}, obj1, obj2);

console.log("Using Object.assign", obj1, obj2);

//deep merge

//deep merge - involving own properties & methods and also external properties & methods

function deepMerge(...objects) {
  const target = {};

  const merger = (object, targetValue) => {
    for (const key in object) {
      if (
        [key] in targetValue &&
        typeof object[key] === "object" &&
        !Array.isArray(object[key])
      ) {
        merger(object[key], targetValue[key]);
      } else {
        targetValue[key] = object[key];
      }
    }
  };
  for (const object of objects) {
    merger(object, target);
  }
  return target;
}

let o1 = {
  marks: [1, 2, 3],
  name: "prashant",
  age: 23,
  nature: {
    helping: true,
    shy: false,
    nature: {
      helping: true,
      shy: false,
    },
  },
};

let o2 = {
  marks: [1, 2, 4],
  qualification: "BSC CS",
  loves: "Javascript",
  nature: {
    angry: false,
    shy: true,
    nature: {
      angry: false,
      shy: true,
    },
  },
};

console.log("Deep merge", deepMerge(o1, o2));
