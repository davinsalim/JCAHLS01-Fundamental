//variable : Penampung data pada program
/**
 * *susunan variable ===> keywordVariable namaVariable = nilaiVariable ;
 *
 * Keywordvariable: Var, let, const
 * 
 * namaVariable : harus diawali dengan huruf atau symbol "_" atau symbol "$"
 * 
 * valueVariable : berdasarkan tipe data ===> string, number, boolean, array, object 
 * 
 * 
 * // keyword var : Redeclare, Reassign
 */

var name = "Davin"; //deklarasi variable ; tahap pertama membuat variable 
var name = "Edo"; //Redeclare > akan mengambil variable terakhir, disarankan tidak dilakukan 
nama = "Budi"; //Reassign > variable kita ambil tapi isi kita ganti

console.log(nama); // untuk menampilkan nilai pada terminal > fungsi process nya 

// Keyword let : Non-Redeclare, Reassign / untuk mencegah variable kepake
let age = 26;
// let age = 20; // Redeclare X 
age = 30;
console.log(age);

//keyword const : Non-Redeclare, Non-Reassign  (menggunakan huruf kapital semua)
const PI = 3.14;
// const PI = 14; // Redeclare X
// PI = 22 / 7; // Reassign X

console.log(PI);

//Shortcut yang biasa digunakan//
//cmd + shift + f (rapihin kodingan)//
// opt + atas bawah (pindah program)// 
// shift alt + atas bawah (duplicate)//

///////////////////////// ATURAN PENULISAN VARIABLE /////////////////////////
// 1. Harus diawali huruf  > let 1nama (tidak boleh)
let perkerjaan;// (boleh)
var alamat = "surabaya"; // 

// 2. Boleh diawali dengan symbol (_ atau $)
let _telp = "081808707070";

// 3. Variable yang terdiri dari 2 suku kata atau lebih
let fullName = "Davin Salim"; // camelCase
let harga_barang = 20000;// Snake_case 
let namaproduk = "air Jordan"; //
//let stok barang; // TIDAK BISA
//let stok-barang// TIDAK BISA

///////////////////////// DATA TYPE /////////////////////////////
// 1. String : Tipe data yang berkaitan dengan huruf > ditandai dengan tanda ""//
let namaToko = "Gladius 'A' \"Toko\" \n Olahraga"; // double quote (kalau double, butuh single bisa langsung)
let nama_toko = 'Gladius \'B\' \n Toko olahraga'; // single quote 
let namatoko = `Gladius 'C' 
"Toko" 
Olahraga` ; // backtick (lebih sering digunakan)

console.log (namaToko)
console.log (nama_toko)
console.log (namatoko)

let alamatToko = "Jl Sudirman no 23"
// let alamatlengkap =namaToko + " " + alamatToko; // Cara 1 
let alamatLengkap =`Pak eko, ${namaToko}, ${alamatToko}` //Cara 2

console.log(alamatLengkap); 

////////FUNGSI PADA DATA STRING///////
let greeting ="Hello Purwandhika Student"; 

// typeof :memeriksa tipe data
//console.log(typeof greeting);//
console.log("output dari typeof ===>>",typeof greeting);
console.log("output dari typeof ===>>",typeof "hello"); //nilai langsung

//string.length =menghitung panjang data string//
console.log("output dari string length ===>>",greeting.length);

//string.toLowercase() : merubah semua huruf menjadi kecil //
console.log("output menjadi huruf kecil ===>>", greeting.toLowerCase());

//string.toUppercase() : merubah semua huruf menjadi besar //
console.log("output menjadi huruf besar ===>>", greeting.toUpperCase());

//string.includes() : memastikan semua kata ada pada variable //
console.log("output dari string.includes(`kata cari`) ===>>", greeting.includes("Purwandhika"));

// NUMBER atau INTERGER : berkaitan dengan angka 

let jarak = 1500; // Nilai Interget (INT)
let berat = 90.25; // Nilai Float atau desimal 
let saldoATM = 25e6; // sama aja dengan 25000000

// console.log (saldoATM); //

// Arithmethic Operator : +. -. *, /, %
let hasil = jarak + 500;

console.log (hasil);
// Jika String ditambahkan dengan number tipe datanya menjadi string // 
// console.log (3+"2"+5) = 325) // 

// Increment 
jarak++; //1501
jarak++; //1502
jarak++; //1503
jarak++; //1504

jarak +=5; // ===> jarak = jarak + 5; // 1509
jarak +=5; // ===> jarak = jarak + 5; // 1514

console.log("Jarak ===> ", jarak);

// Decrement 
jarak--; //1501
jarak--; //1502
jarak--; //1503
jarak--; //1504

jarak -=5; // ===> jarak = jarak + 5; // 1509
jarak -=5; // ===> jarak = jarak + 5; // 1514

//////////////// MATH OBJECT /////////////////
const PI_CIRCLE = Math.PI;
console.log (PI_CIRCLE) 

console.log (Math.abs(-25.5)); // nilai absolute positif
console.log (Math.abs(-25.5)* -1); // nilai absolute negatif 
console.log (-Math.abs(-25.5)); // nilai absolute negatif 
console.log (Math.pow(4, 2)); // nilai pangkat 2
console.log (Math.sqrt(4)); // akar pangkar 2
console.log (Math.cbrt(8)); // akar pangkar 3 

// PEMBULATAN 
console.log(Math.round(2.5)); // pembulatan ke nilai terdekat 
console.log(Math.ceil(2.1)); // pembulatan ke nilai atas
console.log(Math.floor(2.9)); // pembulatan ke nilai bawah

console.log(Math.min(3, 2, 4, 5, 7, 8)); // mencari nilai terkecil
console.log(Math.max(3, 2, 4, 5, 7, 8)); // mencari nilai terbesar
console.log(Math.random()); //membuat nilai random dari 0.xx s/d 1 

// PARSING DATA STRING TO NUMBER 
let angka = "123.456"

console.log(typeof angka); 
console.log(parseInt(angka)); //123
console.log(parseFloat(angka)); //123.456

// PARSING DATA NUMBER TO STRING
let angkaB = 150050; 

console.log(angkaB.toString()); // "150050"
console.log(angkaB.toLocaleString()); // "150.050"

// Memeriksa data apakah sebuah angka // 
console.log(isNaN(2)); // FALSE
console.log(isNaN("ABCDE")); // TRUE
console.log(isNaN("12")); // FALSE

// Boolean : Nilai Benar => TRUE atau Salah => FALSE
let benar =true; 
let salah =false; 

//Comparison Operator : >, < , >=, <=, ==, ===, != 
let angka_A =20;
let angka_B =15;
console.log("Comparison : ", angka_A >angka_B); // True
console.log("Comparison : ", angka_A <angka_B); // False
console.log("Comparison : ", angka_A ==angka_A); // True
console.log("Comparison : ", angka_A ==angka_B); // False
console.log("Comparison : ", angka_A !=angka_B); // True
console.log("Comparison : ", angka_A ==20); // True
console.log("Comparison : ", angka_A =="20"); // True => selama nilainya sama, tipe datanya berbeda akan menghasilkan True
console.log("Comparison : ", angka_A ==="20"); // False => Nilai dan tipe datanya harus sama 

// Logical Operator : AND, OR, NOT 
// AND akan menghasilakn nilai TRUE apabila kedua perbandingan bernilai TRUE
console.log("Logical AND: ", true && true); //TRUE
console.log("Logical AND: ", false && true); //FALSE
console.log("Logical AND: ", false && false); //FALSE
console.log("Logical AND: ", angka_A > 19 && angka_B < 19); //  True
console.log("Logical AND: ", angka_A < 19 && angka_B < 19); //  FALSE

// OR : Selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("Logical OR: ", true || true); //TRUE
console.log("Logical AND: ", false || true); //TRUE
console.log("Logical AND: ", false || false); //FALSE
console.log("Logical AND: ", angka_A >= 15 || angka_B <= 15); //  True
console.log("Logical AND: ", angka_A >= 15 || angka_B > 15); //  True

// NOT : Membalik Logika
console.log("Logical OR: ", !true); //False
console.log("Logical OR: ", !false); //True

// Tipe Data Truthly dan Falsy
// Truthly: Tipe data yang bernilai TRUE
console.log(Boolean(2)); //True
console.log(Boolean("ABCSDD")); // TRUE
console.log(Boolean(true)); //True
console.log(Boolean(-2)); //True
console.log(Boolean("false")); //True
console.log(Boolean(" ")); //True

// Falsy : Tipe data yang bernilai False 
console.log(Boolean(false)); //True
console.log(Boolean(0)); // TRUE
console.log(Boolean("")); //True
console.log(Boolean(undefined)); //True
console.log(Boolean(null)); //True

