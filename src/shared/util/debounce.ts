const debounce = (fn: Function, ms = 500) => {
  let timeoutId: any;
  return function debounceFunc(this: any, ...rest: Array<any>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, rest);
    }, ms);
  };
};
export default debounce;
