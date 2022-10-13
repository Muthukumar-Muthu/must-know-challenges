import { Routes, Route, Link } from "react-router-dom";

import UseThrottle from "./pages/useThrottle";
import UseAsync from "./pages/UseAsync";
import UseDebounce from "./pages/UseDebounce";
import UseResponsive from "./pages/useResponsive";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/useAsync">useAsync</Link>
        </li>
        <li>
          <Link to="/useDebounce">useDebounce</Link>
        </li>
        <li>
          <Link to="/useReponsive">useReponsive</Link>
        </li>
        <li>
          <Link to="/useThrottle">useThrottle</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/useAsync" element={<UseAsync />} />
        <Route path="/useDebounce" element={<UseDebounce />} />
        <Route path="/useReponsive" element={<UseResponsive />} />
        <Route path="/useThrottle" element={<UseThrottle />} />
      </Routes>
    </div>
  );
}
