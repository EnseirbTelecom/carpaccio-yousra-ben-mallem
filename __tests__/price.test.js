const utils = require('../functions/utils')

describe('price', () => {
  test('quantities and prices of different length', () => {
    function getprice () {
      return utils.price([10], [20, 20], 'DE', 'NO_DISCOUNT')
    }
    expect(getprice).toThrowError(new Error('Quantities and prices must have the same length !'))
  })

  test('quantities and prices contain more than 2 elements', () => {
    function getTotal () {
      return utils.price([10, 20, 30], [100, 200, 300], 'DE', 'NO_DISCOUNT')
    }
    expect(getTotal).toThrowError(new Error('Quantities and prices must be an array of two elements !'))
  })

  test('unknown country code', () => {
    function getTotalprice () {
      return utils.price([10, 20], [100, 250], 'TU', 'NO_DISCOUNT')
    }
    expect(getTotalprice).toThrowError(new Error('The country code is unknown !'))
  })

  test('no discount country:Germany', () => {
    expect(utils.price([10, 20], [5, 2], 'DE', 'NO_DISCOUNT')).toBe(108)
  })

  test('flat discount country:Italy', () => {
    expect(utils.price([10, 20], [5, 2], 'IT', 'FLAT_DISCOUNT')).toBe(78.75)
  })

  test('progressive discount country : Bulgaria', () => {
    expect(utils.price([150, 220], [5, 2], 'BG', 'PROGRESSIVE_DISCOUNT')).toBe(1396.703)
  })

  test('fixed discount country : Belgium', () => {
    expect(utils.price([120, 4000], [10, 7], 'BE', 'FIXED_DISCOUNT')).toBe(36008)
  })

  test('Without discount argument country : Slovenia', () => {
    expect(utils.price([120, 400], [5, 6], 'SI')).toBe(3720)
  })
})
