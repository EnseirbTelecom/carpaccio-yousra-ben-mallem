module.exports.idRepo = function(id){
    if(id === undefined){
        return "Unknown";
    }else{
        return id;
    }
}

module.exports.price = function(quantity1,price1,quantity2,price2){
    return (quantity1 || 0 ) * ( price1 || 0) + (quantity2 || 0)*(price2 || 0)
}