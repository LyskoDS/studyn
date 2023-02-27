let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = '';

while (randomString.length < 10) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);