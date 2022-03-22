const ganjilGenap = (number1) => {
    let hasil = number1 % 2
    if (hasil == 0) {
        return (`${number1} adalah kelipatan genap`);
    } else { 
        return (`${number1} adalah kelipatan ganjil`);
    }
}

console.log(ganjilGenap(99));