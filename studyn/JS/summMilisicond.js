function past(h, m, s) {
  let a = 3600000 * h;
  let b = 60000 * m;
  let c = 1000 * s;
   return a + b + c;
}
console.log(past(0, 1, 1));
