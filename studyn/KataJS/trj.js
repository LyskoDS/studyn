function isPalindrome(x) {
    let a = x.split('').reverse().join('');
    if (x == a) {
        return true;
    } else (x != a);
        return false;
}
console.log(isPalindrome("hello"));