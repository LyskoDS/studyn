function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
        return -1;
    } else return ((Math.sqrt(sq) + 1) ** 2);
}

console.log(findNextSquare(144));