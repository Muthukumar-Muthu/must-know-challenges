import { useRef } from "react";
import useOnScreen from "../hooks/useOnscreen";
const Element = ({ number }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div style={{ minHeight: "100px" }} ref={ref} className="box">
      <span>{number}</span>
      {isVisible ? `I am on screen` : `I am invisible`}
    </div>
  );
};

const DummyComponent = () => {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(<Element key={i} number={i} />);
  }

  return arr;
};

export default DummyComponent;
