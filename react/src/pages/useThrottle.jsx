import { useCallback } from "react";
import useThrottle from "../hooks/useThrottle";
const UseThrottle = () => {
  const memoSendRequest = useCallback(useThrottle(sendRequest, 2000), []);

  return (
    <div>
      <button onClick={() => memoSendRequest("click")}>Click me</button>
      <h4>See the console</h4>
    </div>
  );
};
export default UseThrottle;

function sendRequest(message) {
  console.log(message);
}
