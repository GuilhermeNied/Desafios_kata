const stringCalculator = require('./stringCalculator')
const assert = require('assert')

describe('string calculator', function () {
  describe('add', function () {
    it('0 == empty string', function () {
      assert.equal(stringCalculator(''), 0)
    })

    it('just a string with a number ', function () {
      assert.equal(stringCalculator('1'), 1)
    })

    it('sum of numbers separated by comma', function () {
      assert.equal(stringCalculator('1,2,3'), 6)
    })

    it('number delimiter \\n', function () {
      assert.equal(stringCalculator('1\n2'), 3)
    })
  })
})
