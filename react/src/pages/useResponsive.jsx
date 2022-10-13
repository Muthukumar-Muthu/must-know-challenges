import { useEffect } from "react";
import useResponsive from "../hooks/useResponsive";
export default function UseResponsive() {
  const device = useResponsive();

  useEffect(() => {
    console.log(device); //only runs if device width changes
  }, [...Object.values(device)]);

  return <div>{JSON.stringify(device)}</div>;
}
