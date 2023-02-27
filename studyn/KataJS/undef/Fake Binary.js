function fakeBin(x){
    let stroke='';
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= "5") {
            stroke = stroke + "1";
        } else if (x[i] < "5") {
            stroke = stroke + "0";
        }
    }
    return stroke;
}