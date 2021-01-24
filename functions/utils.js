const jsonTVA = require('./countryTVA.json')
const tables = jsonTVA.countries
const utils = require('./utils')

module.exports.idRepo = function (id) {
  if (id === undefined) {
    return 'Unknown'
  } else {
    return id
  }
}

module.exports.price = (quantities, prices, country, discount = 'NO_DISCOUNT') => {
  let TVA = 0
  tables.forEach(function (table) {
    if (table.code === country) {
      TVA = table.TVA
    }
  })

  if (TVA === 0) {
    throw new Error('The country code is unknown !')
  }

  if (quantities.length !== prices.length) {
    throw new Error('Quantities and prices must have the same length !')
  } else {
    if (quantities.length !== 2) {
      throw new Error('Quantities and prices must be an array of two elements !')
    }
  }

  const priceHT = quantities[0] * prices[0] + quantities[1] * prices[1]
  const priceTTC = priceHT + priceHT * TVA / 100
  const discountedPrice = utils.applydiscount(priceTTC, discount)
  return discountedPrice
}

module.exports.progressiveDiscount = function (price) {
  switch (true) {
    case price >= 50000:
      return (price - price * 15 / 100)
    case price >= 10000 && price < 50000:
      return (price - price * 10 / 100)
    case price >= 7000 && price < 10000:
      return (price - price * 7 / 100)
    case price >= 5000 && price < 7000:
      return (price - price * 5 / 100)
    case price >= 1000 && price < 5000:
      return (price - price * 3 / 100)
    default: return price
  }
}

module.exports.applydiscount = (price, discount) => {
  switch (discount) {
    case 'NO_DISCOUNT':
      return price
    case 'PROGRESSIVE_DISCOUNT':
      return utils.progressiveDiscount(price)
    case 'FLAT_DISCOUNT':
      return price - price * 30 / 100
    case 'FIXED_DISCOUNT':
      return utils.fixedDiscount(price)
    default:
      return price
  }
}

module.exports.fixedDiscount = function (price) {
  switch (true) {
    case price >= 1000:
      return price - 200
    case price >= 400 && price < 1000:
      return price - 50
    case price >= 100 && price < 400:
      return price - 10
    default: return price
  }
}
