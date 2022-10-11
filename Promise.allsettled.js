/*
Let us see how to write a polyfill for Promise.allSettled.

Promise.allSettled takes an array of promises as input and returns an array with the result of all the promises whether they are rejected or resolved.

According to MDN –

The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
*/

const allSettled = async (promises) => {
  let settledPromiseCount = 0;
  let settledPromises = [];

  return new Promise((resolve, reject) => {
    promises.map((promise, i) => {
      return promise
        .then((result) => {
          settledPromiseCount++;
          settledPromises[i] = { status: "RESOLVED", result };
        })
        .catch((err) => {
          settledPromiseCount++;
          settledPromises[i] = { status: "REJECTED", error: err };
        })
        .finally(() => {
          if (settledPromiseCount === promises.length) {
            resolve(settledPromises);
          }
        });
    });
  });
};

const promises = [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved promise");
    }, 2000);
  }),

  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Resolved promise");
    }, 5000);
  }),
];

allSettled(promises).then((response) => console.log(response));
