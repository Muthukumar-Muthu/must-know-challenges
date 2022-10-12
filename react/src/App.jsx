import { useEffect, useRef, useState } from "react";

import useDebounce from "./useDebounce";
import useResponsive from "./useResponsive";
import useThrottle from "./useThrottle";
import useAsync from "./useAsync";
export default function App() {
  const [value, setValue] = useState("");
  const debouncedRef = useRef(useDebounce(sendRequest, 200));
  const throttledRef = useRef(useThrottle(sendRequest, 2000));
  const asyncReturn = useAsync(sendAsyncRequest);
  const device = useResponsive();

  function changeHandler(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    console.log(device); //only runs if device width changes
  }, [...Object.values(device)]);

  useEffect(() => {
    if (value !== "") debouncedRef.current(value);
  }, [value]);

  console.log(asyncReturn);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={() => throttledRef.current("click")}>Click me</button>
    </div>
  );
}

function sendRequest(message) {
  console.log(message);
}

async function sendAsyncRequest() {
  console.log("runnning ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5 ? resolve("Success") : reject("Error");
    }, 1000);
  });
}
