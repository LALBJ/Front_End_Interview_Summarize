function add() {
  const args = [].slice.call(arguments);
  let fn = function () {
    let fn_args = [].slice.call(arguments);
    return add.apply(null, args.concat(fn_args));
  };
  fn.toString = function () {
    return args.reduce((a, b) => a + b);
  };
  return fn;
}

console.log(add(1) + ""); // 1
console.log(add(1)(2) + ""); // 3
console.log(add(1)(2)(3) + ""); // 6
console.log(add(1)(2, 3) + ""); // 6
console.log(add(1, 2)(3) + ""); // 6
console.log(add(1, 2, 3) + ""); // 6
