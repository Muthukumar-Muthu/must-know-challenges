import { useEffect, useRef, useState } from "react";
import "./styles.css";
import useDebounce from "./useDebounce";

export default function App() {
  const [value, setValue] = useState("");
  const debouncedRef = useRef(useDebounce(sendRequest, 200));

  function changeHandler(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    if (value !== "") debouncedRef.current(value);
  }, [value]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="text" value={value} onChange={changeHandler} />
    </div>
  );
}

function sendRequest(message) {
  console.log(message);
}
