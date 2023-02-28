function correct(string) {
    let arr = "";
    for (let i = 0; i < string.length; i++) {
    if (string[i] === '5') {
        arr +='S';
    } else if (string[i] === '0') {
        arr += 'O';
    } else if (string[i] === '1') {
        arr += 'I';
    } else arr += string[i];
}
    return arr;
}

console.log(correct("51NGAP0RE"));