module.exports = function main(input) {
    let price = 6
    if(input.distance <= 2){
        price += input.wait * 0.25 
    }else if(input.distance > 2 && input.distance <= 8){
        price += ((input.distance - 2) * 0.8 + input.wait * 0.25)
    }
    return Math.round(price);
};