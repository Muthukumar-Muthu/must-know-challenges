/*
Input:
groupBy([6.1, 4.2, 6.3], Math.floor);
groupBy(["one", "two", "three"], "length");

Output:
// { 6: [6.1, 6.3], 4: [4.2] }
// { 3: ['one', 'two'], 5: ['three'] }
*/

const groupBy = (collection, iteratee) => {
  const getKey = typeof iteratee === "function" ? iteratee : (p) => p[iteratee];

  return collection.reduce((p, c) => {
    const key = getKey(c);
    if ([key] in p) {
      p[key] = [...p[key], c];
    } else p[key] = [c];
    return p;
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));

//https://learnersbucket.com/examples/interview/groupby-polyfill-in-javascript/
