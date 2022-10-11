import { useEffect, useRef, useState } from "react";

import useDebounce from "./useDebounce";
import useResponsive from "./useResponsive";
import useThrottle from "./useThrottle";

export default function App() {
  const [value, setValue] = useState("");
  const debouncedRef = useRef(useDebounce(sendRequest, 200));
  const throttledRef = useRef(useThrottle(sendRequest, 2000));
  const device = useResponsive();
  function changeHandler(e) {
    setValue(e.target.value);
  }
  console.log(device);
  useEffect(() => {
    if (value !== "") debouncedRef.current(value);
  }, [value]);

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