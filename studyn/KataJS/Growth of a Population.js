function nbYear(p0, percent, aug, p) {
    let y = 0;
    while (p0 < p) {
        y++;
        p0 = p0 + Math.round(p0 * (percent / 100)) + aug;

    }
    return y;
}

console.log(nbYear(1500, 5, 100, 5000));