import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function sendRequest(message) {
  console.log("send requesting", message);
}

export default function UseDebounce() {
  const [value, setValue] = useState("");
  const memoSendRequest = useCallback(() => useDebounce(sendRequest, 200), []);

  function changeHandler(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    if (value !== "") memoSendRequest(value);
  }, [value]);

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <h3>See the console</h3>
    </div>
  );
}
