function mango(quantity, price){
                if (quantity < 3) {
        return (quantity * price);
    } else (quantity >= 3);
                return ((quantity - Math.floor(quantity / 3) ) * price);
return 0;
}

console.log(mango(9, 5));