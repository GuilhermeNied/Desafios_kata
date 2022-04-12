function FizzBuzz(num) {
  for (num; num < 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      return 'FizzBuzz'
    } else if (num % 3 == 0) {
      return 'Fizz'
    } else if (num % 5 == 0) {
      return 'Buzz'
    } else {
      return num
    }
  }
}
FizzBuzz(0)

module.exports = FizzBuzz
