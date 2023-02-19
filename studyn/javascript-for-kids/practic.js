var cubeChecker = function(volume, side){
    if (volume % side !== 0 || volume <= 0 || side <= 0) {
        return false;
    } else return true;
};

console.log(cubeChecker(604513 ,91));