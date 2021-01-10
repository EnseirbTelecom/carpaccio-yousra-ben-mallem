const utils = require('../functions/utils')

describe('price', () => {
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

  test('one product country spain : ES ', () => {
    expect(utils.price([120], [5], 'ES', 'PROGRESSIVE_DISCOUNT')).toBe(714)
  })
})
