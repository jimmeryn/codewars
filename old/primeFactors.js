// Primes in numbers
function primeFactors(n) {
  let res = "",
    f;
  for (let i = 2; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    f !== 0 ? console.log(i, f) : null;
    res += f ? "(" + (f > 1 ? i + "**" + f : i) + ")" : "";
  }
  return res || "(" + n + ")";
}
