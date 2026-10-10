/* Exact coefficients of J(q)=j(q)-744 from j=E4^3/Delta.
   Delta=q*prod(1-q^m)^24. All arithmetic stays in BigInt. */
(function () {
  function divisorSums(limit, power) {
    const sums = Array(limit + 1).fill(0n);
    for (let divisor = 1; divisor <= limit; divisor++) {
      const value = BigInt(divisor) ** BigInt(power);
      for (let multiple = divisor; multiple <= limit; multiple += divisor) sums[multiple] += value;
    }
    return sums;
  }
  function multiply(left, right, limit) {
    const result = Array(limit + 1).fill(0n);
    for (let i = 0; i <= limit; i++) {
      if (!left[i]) continue;
      for (let j = 0; i + j <= limit; j++) {
        if (right[j]) result[i + j] += left[i] * right[j];
      }
    }
    return result;
  }
  function buildRootCoefficients(maxIndex) {
    const limit = maxIndex + 1;
    const sigmaOne = divisorSums(limit, 1);
    const sigmaThree = divisorSums(limit, 3);
    const partition = Array(limit + 1).fill(0n);
    partition[0] = 1n;
    // q P'(q)/P(q)=24 sum_{n>=1} sigma_1(n) q^n.
    for (let n = 1; n <= limit; n++) {
      let sum = 0n;
      for (let k = 1; k <= n; k++) sum += sigmaOne[k] * partition[n - k];
      const numerator = 24n * sum;
      if (numerator % BigInt(n) !== 0n) throw new Error('j-series division was not integral');
      partition[n] = numerator / BigInt(n);
    }
    const eisenstein = sigmaThree.map((value, n) => n === 0 ? 1n : 240n * value);
    const e4Cubed = multiply(multiply(eisenstein, eisenstein, limit), eisenstein, limit);
    const jTimesQ = multiply(e4Cubed, partition, limit);
    if (jTimesQ[1] !== 744n) throw new Error('Unexpected constant term of j');
    const coefficients = { '-1': '1', '0': '0' };
    for (let n = 1; n <= maxIndex; n++) coefficients[String(n)] = jTimesQ[n + 1].toString();
    return coefficients;
  }
  const coefficients = buildRootCoefficients(144);
  if (typeof window !== 'undefined') window.MONSTER_ROOT_COEFFICIENTS = coefficients;
  if (typeof module !== 'undefined' && module.exports) module.exports = { buildRootCoefficients };
})();
