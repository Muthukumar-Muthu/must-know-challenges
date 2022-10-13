import { useEffect, useState } from "react";

/*

Let us see how to implement useAsync() hook in React.

useAsync(asyncFn, immediate) takes an async function and an immediate flag as input and it will provide an abstraction for complete async operation (API calls) in React, in return it will give the status, value, error, refetch.

state: It will have one of the four values ["idle", "pending", "success", "error"] depending upon the current state of the asyncFn.
value: If the state is success then this will have the value returned from the asyncFn.
error: If the state is error then this will have the error returned from the asyncFn.
refetch(): This function can be used to invoke the function again and refetch data.

*/

const status = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
};
const initalState = {
  status: status.IDLE,
  value: null,
  error: null,
  refetch: null,
};

export default function useAsync(asyncFun) {
  const [result, setResult] = useState(initalState);
  const [asyncFunCallCount, setAsyncFunCallCount] = useState(0);

  useEffect(() => {
    setResult({
      status: status.PENDING,
      value: null,
      error: null,
      refetch: () => setAsyncFunCallCount((p) => p + 1),
    });
    asyncFun()
      .then((response) =>
        setResult({
          status: status.SUCCESS,
          value: response,
          error: null,
          refetch: () => setAsyncFunCallCount((p) => p + 1),
        })
      )
      .catch((err) =>
        setResult({
          status: status.ERROR,
          value: null,
          error: err,
          refetch: () => setAsyncFunCallCount((p) => p + 1),
        })
      );
  }, [asyncFunCallCount]);
  return result;
}
