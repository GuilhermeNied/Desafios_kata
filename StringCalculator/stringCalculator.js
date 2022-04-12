function stringCalculator(str) {
  let nums = str.split(/,|\n/).map(Number)
  return nums.reduce((a, b) => a + b)
}

module.exports = stringCalculator
