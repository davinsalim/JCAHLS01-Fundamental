// DAY 04 : Function 
/**
 * 1. Function: sekumpulan program yang digunakan untuk menyelesaikan tugas tertentu, dan umumnya bisa digunakan berkali2
 * 2. Untuk digunakan, maka harus dibuat
 * 3. Function bersifat reusable 
 * 4. Built-In Function: Function Bawaan Javascript 
 * 5. User Defined Function: Function  yg kita buat sendiri
 *      a. Menggunakan keyword function 
 *      b. Nama Function 
 *      c. Parameter / Argument : Agar function dapat menerima data dari luar function 
 *          i. Disimpan di dalam () 
 *          ii. Boleh ada, Boleh Tidak
 *          iii. Jika argument lebih dari 1, maka harus dipisah dengan ","
 */

/** Declarative Function 
 * 
 * keywordFunction namaFunction (argument) {
 * function code 
 * }
 */

let angka1 =200; 
let angka2 =25; 

function penjumlahan () { 
    let hasil = angka1 + angka2 
    console.log (hasil)
}

// memanggil function 
penjumlahan; 

// menggunakan / menjalankan function 
penjumlahan();

function pengurangan (argument1, argument2) {
    let hasil = argument1 - argument2 ;
    console.log(hasil)
}

pengurangan(100, 35);

/** Function Expression 
 * 
 * keywordVariable namaVariable = keywordFunction (argument) {
 * Function Code
 * }
 */
const perkalian = function (argument1, argument2){
    let hasil = argument1 * argument2;
    console.log(hasil);
}

perkalian (3,3);

/** Arrow Function 
 * keywordVariable namaVariable=(argument)=>{
 * //Function Code
 * }
 */

const pembagian = (argument1, argument2) => { 
    let hasil = argument1 / argument2;
    console.log(hasil);
}

pembagian (12,5); 

// Default Value Argument
const kelipatan = (number1, number2) => {
    let hasil = number1 % number2;
    if (hasil == 0) {
        console.log(`${number1} adalah kelipatan ${number2}`);
    } else { 
        console.log(`${number1} bukan kelipatan ${number2}`);
    }
}
kelipatan(15,3); 

//  return : keyword yang diperuntukan untuk mengeluarkan nilai dari function 
const kelipatan = (number1, number2) => {
    let hasil = number1 % number2;
    if (hasil == 0) {
        return (`${number1} adalah kelipatan ${number2}`);
    } else { 
        return (`${number1} bukan kelipatan ${number2}`);
    }
}

//namaVariableArray.forEach() : melooping sebuah data array dan tidak bisa menghasilkan array baru atau tidak menghasilkan 
const cetak = (value, index) => {  // cara 1
    list += `${index + 1} ${value};\n`; //cara 1
}

// barang.forEach((value, index) => cetak(value,index)); //cara 1 

barang.forEach((value, index) => {
    list += `${index+1} ${value};\n`; //cara 2
});

console.log(list);


//console.log(printData);
// NamaVariableArray.map(): melooping sebuah data array dan bisa menghasilkan array baru atau menghasilkan return 

let numb =  [2, 3, 4, 1, 6, 5];
let kali = (value, index) => {
return value*2
}

// let number =numb.map(kali); //cara 1
let numbArr = numb.map((val, idx) => { 
    return `${Idx+1}. Ini angka ${val}`
});

console.log(numb);

//console.log (numb); 
const jumlah = (angka1, angka2) =>{
    return angka1 + angka2
};

const jumlahDikali =(cb, pengali) =>{
    return cb(2,3) * pengali
};

console.log(jumlahDikali(jumlah, 5));

//const jumlahDikali =(cb, pengali) =>{
 //   return cb * pengali
//};

//console.log(jumlahDikali(jumlah (2,4), 5));
//for each untuk melooping
// looping + menghasilkan data baru dari data sebelomnya 
// lebih baik pakai map dari pada loop

let listBarang = barang.map((value, index)=>{
return `${index +1} ${value}`
})

console.log("FOREACH ==>", list)
console.log("MAP ==>", listBarang.join("\n"))


// //////// FILTER /////////
// //namaVariableArray.filter() : mengolah data array sehingga menghasilkan array baru berdasarkan condition yang diberikan
// let filterGenap = numb.filter((value, index) => {
//     return value%2 == 0

// });

// console.log(filterGenap)
c


