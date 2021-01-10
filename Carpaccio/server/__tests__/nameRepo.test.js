const utils = require('../functions/utils')

describe('idRepo', () => {
  test('Without id argument', () => {
    expect(utils.idRepo()).toBe('Unknown')
  })
  test('With id argument', () => {
    expect(utils.idRepo('it340')).toBe('it340')
  })
})
