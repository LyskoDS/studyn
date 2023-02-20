let uniqueInOrder = function(iterable) {
    let array = [];
    let last;
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== last) {
            array.push(last = iterable[i])
        }
    }
    return array;
}

console.log(uniqueInOrder([5,2,8,8,3,4]));