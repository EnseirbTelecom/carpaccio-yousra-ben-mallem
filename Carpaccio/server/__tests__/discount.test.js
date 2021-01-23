const utils = require('../functions/utils')

describe('applydiscount', () => {
  test('without discount argument', () => {
    expect(utils.applydiscount(1000)).toBe(1000)
  })
  test('no discount', () => {
    expect(utils.applydiscount(1000, 'NO_DISCOUNT')).toBe(1000)
  })
  test('flat discount', () => {
    expect(utils.applydiscount(1000, 'FLAT_DISCOUNT')).toBe(700)
  })
  test('progressive discount', () => {
    expect(utils.applydiscount(7180, 'PROGRESSIVE_DISCOUNT')).toBe(6677.4)
  })
  test('fixed discount', () => {
    expect(utils.applydiscount(480, 'FIXED_DISCOUNT')).toBe(430)
  })
})

describe('fixedDiscount', () => {
  test('Greater than or equal to 1000', () => {
    expect(utils.fixedDiscount(2000)).toBe(1800)
  })
  test('Greater than or equal to 400', () => {
    expect(utils.fixedDiscount(500)).toBe(450)
  })
  test('Greater than or equal to 100', () => {
    expect(utils.fixedDiscount(150)).toBe(140)
  })
  test('Default case', () => {
    expect(utils.fixedDiscount(50)).toBe(50)
  })
})

describe('progressiveDiscount', () => {
  test('Greater than or equal to 50000', () => {
    expect(utils.progressiveDiscount(60000)).toBe(51000)
  })
  test('Greater than or equal to 10000', () => {
    expect(utils.progressiveDiscount(20000)).toBe(18000)
  })
  test('Greater than or equal to 7000', () => {
    expect(utils.progressiveDiscount(8000)).toBe(7440)
  })
  test('Greater than or equal to 5000', () => {
    expect(utils.progressiveDiscount(8000)).toBe(7440)
  })
  test('Greater than or equal to 1000', () => {
    expect(utils.progressiveDiscount(2000)).toBe(1940)
  })
  test('Default case', () => {
    expect(utils.progressiveDiscount(500)).toBe(500)
  })
})
