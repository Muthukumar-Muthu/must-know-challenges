/*
Implement a function in JavaScript that retries promises N number of times with a delay between each call.

Example
Input:
retry(asyncFn, retries = 3, delay = 50, finalError = 'Failed');

Output:
... attempt 1 -> failed
... attempt 2 -> retry after 50ms -> failed
... attempt 3 -> retry after 50ms -> failed
... Failed.

https://learnersbucket.com/examples/interview/retry-promises-n-number-of-times-in-javascript/
*/

async function retryWithDelay(asyncFn, retires, delay, finalError) {
  try {
    console.log(`calling ${retires}`);
    return await asyncFn;
  } catch (error) {
    if (retires <= 0) {
      throw new Error(finalError);
    } else
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          retryWithDelay(asyncFn, retires - 1, delay, finalError)
            .then((value) => resolve(value))
            .catch((e) => {
              reject(e);
            });
        }, delay);
      });
  }
}

async function test() {
  return await retryWithDelay(Promise.reject("reject"), 2, 2000, "Error");
}

test()
  .then((value) => {
    console.log("here");
    console.log(value);
  })
  .catch((err) => {
    console.error("catched the error", err);
  });
