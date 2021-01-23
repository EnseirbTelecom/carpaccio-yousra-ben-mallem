let jsonTVA = require('./countryTVA.json');
let tables = jsonTVA.countries

module.exports.idRepo = function (id) {
    if (id === undefined) {
        return "Unknown";
    } else {
        return id;
    }
}

module.exports.price = function (quantities, prices, country, discount = "NO_DISCOUNT") {
    let TVA = 0
    tables.forEach(function (table) {
        if (table.code == country) {
            TVA = table.TVA
            console.log(table);
        }
    });
    if (TVA == 0) {
        console.log("error Country code undefined")
    }
    priceHT = (quantities[0] || 0) * (prices[0] || 0) + (quantities[1] || 0) * (prices[1] || 0)
    priceTTC = priceHT + priceHT * TVA / 100
    console.log("price TTC: " + priceTTC)
    discountedPrice = applydiscount(priceTTC, discount)
    console.log("price Discounted: " + discountedPrice)
    return discountedPrice
}

function applydiscount(price, discount) {
    switch (discount) {
        case 'NO_DISCOUNT':
            return price
            break;
        case 'PROGRESSIVE_DISCOUNT':
            return progressiveDiscount(price)
            break;
        case 'FLAT_DISCOUNT':
            return price - price * 30 / 100
            break;
        case 'FIXED_DISCOUNT':
            return fixedDiscount(price)
            break;
        default:
            return price
    }

}

function progressiveDiscount(price) {
    console.log("progressiveDiscount")
    switch (true) {
        case price >= 50000:
            return (price - price * 15 / 100)
            break;
        case price >= 10000:
            return (price - price * 10 / 100)
            break;
        case price >= 7000:
            return (price - price * 7 / 100)
            break;
        case price >= 5000:
            return (price - price * 5 / 100)
            break;
        case price >= 1000:
            return (price - price * 3 / 100)
            break;
        default: return price
            break;
    }
}

function fixedDiscount(price) {
    console.log("fixedDiscount")
    switch (true) {
        case price >= 1000:
            return price - 200
            break;
        case price >= 400:
            return price - 50
            break;
        case price >= 100:
            return price - 10
            break;
        default: return price
            break;
    }
}