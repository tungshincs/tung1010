let USD2VND = function (n) {
  let changed = n * 23_500;

  console.log(`${n} * 23_500 = ${changed}`);
};

USD2VND(100);
USD2VND(52);

let compoundInterest = function (P, r, n, t) {
  let result = P * (1 + r / n) * (n * t);

  console.log(`${P} * (1 + ${r} / ${n}) * (${n} * ${t}) = ${result}`);
};

compoundInterest(1000000, 0.056, 2, 10);
compoundInterest(5000000, 0.056, 2, 5);
