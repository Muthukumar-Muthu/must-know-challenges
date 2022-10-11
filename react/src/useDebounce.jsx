function debounce(fun, delay) {
  let clearIntervalId = null;
  console.log("debounce");

  return (...p) => {
    if (clearIntervalId) clearInterval(clearIntervalId);

    clearIntervalId = setTimeout(() => {
      fun.apply(null, p);
    }, delay);
  };
}

export default debounce;
