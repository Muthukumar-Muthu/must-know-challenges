export default function useThrottle(fun, delay) {
  let previousCallTime = 0;
  return function (...p) {
    const now = new Date().getTime();
    if (now - previousCallTime > delay) {
      previousCallTime = now;
      fun.apply(this, p);
    }
  };
}
