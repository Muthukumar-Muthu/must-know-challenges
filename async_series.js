/*
Implement a function that takes a list of async functions as input and executes them in a series that is one at a time. The next task is executed only when the previous task is completed.

link - https://learnersbucket.com/examples/interview/execute-async-functions-in-series/
*/

async function executeAsyncFunInSeries(asyncFunctions = []) {
  for (let i = 0; i < asyncFunctions.length; i++) {
    try {
      console.log(await asyncFunctions[i]);
    } catch (error) {
      console.error(error);
    }
  }
}

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

executeAsyncFunInSeries(promises);
