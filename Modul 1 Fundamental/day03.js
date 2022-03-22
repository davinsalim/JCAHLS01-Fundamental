// Day 03: Array data type
/**
 * 1. Definisi: Sebuah tipe data penampung, dikarenakan dapat menampung banyak data dan berbagai tipe yang lain.
 *              Setiap data pada array itu memiliki alamat index. Index pada array itu memiliki data angka/number
 * 2. Tujuan: Mempermudah pengelolaan data
 * 3. Array bertipe Object
 * 4. Array ditandai dengan [data 1, data 2]
 */
// SYNTAX ARRAY
let namaApel = "Apel"; // SALAH
let namaJeruk = "Jeruk" // SALAH

let namaBuah = ["Apel", "Jeruk", "Durian", "Melon" ] //Cara 1
let stock = Array(10, 15, 25, 12); // Cara 2
let harga = []; // Cara 3
harga [0] = 5000;
harga [1] = 2500;
harga [2] = 10000;
harga [3] = 7000;
// akses data pada array ==>> namaVariable[index]
console.log("Nama Buah :", namaBuah[1]);
console.log("Stock Buah :", stock[1]);
console.log("Nama Buah :", harga[1]);
console.log(`Buah ${namaBuah[0]} stoknya ada ${stock[0]} dan harganya Rp. ${harga[0]};`)
//let toko = "Toko Buah Manis"; 
//console.log(toko.split(''));
//let polin = "Malam";
//let arrPolin = polin.split(``); //merubah string menjadi array
// console.log (arrPolin);
////console.log (arrPolin.reverse()); // membalik urutan data pada array
// poling = arrPolin.reverse().join(`);
// console.log(polin);

//Merubah value dari salah satu data pada array 
//Reassign 
//namaBuah[0] = "Semangka"
//console.table(namaBuah);

///////////////////// ARRAY FUNCTION ////////////////////
for(let i=0;i<= 3;i++){
    console.log(`${i+1}. Buah ${namaBuah[i]} ada ${stock[i]} dan harganya ${harga[i]}`)
}

let listbuah = '';
for (let i=0; i <namaBuah.length; i++){
    listbuah += `${i + 1} Buah ${namaBuah[i]} stoknya ada ${stock[i]} dan harganya Rp.${harga[1]};\n`}
console.log(listbuah);

///////// ARRAY FUNCTION //////////
// namaVariableArray.length : untuk mengetahui jumlah data yang ada di dalam array 
// OUTPUT dari length adalah NUMBER INT 
console.log ("Banyak Data array:", namaBuah.length);
console.log ("Value Terakhir:", namaBuah[namaBuah.length -1]);

// namaVariableArray.push(data) : digunakan untuk menambah item baru di akhir Array 
namaBuah.push("alpukat")
stock.push(20)
harga.push(6500);
console.table(namaBuah);

// namaVariableArray.pop() : digunakan untuk menghapus data terakhir dari array 
namaBuah.pop();
stock.pop();
harga.pop();

// namaVariableArray.unshift (data) : digunakan untuk menambah data baru di awal Array 
namaBuah.unshift("Nangka");
stock.unshift(10); 
harga.unshift(2500); 

// namaVariableArray.shift() : digunakan untuk menghapus data dari Array 
namaBuah.shift();
stock.shift();
harga.shift();

// namaVariable.reverse () : membalikkan urutkan data array 
let motor = ["Yamaha", "Honda", "Triumph", "Ducati"];
motor.reverse()
console.log("Sesudah Reverse: ", motor);

//namaVariableArray.join ("separator"): Menggabungkan semua data array menjadi data string 
console.log (motor.join()); // Ducati, Trimuph, Honda, Yamaha
console.log (motor.join("")); // Ducati Trimuph Honda Yamaha
console.log (motor.join(" / ")); // Ducati / Trimuph / Honda / Yamaha

//namaVariable.splice(indexAwal, jumlahDataYangDihapus, databaru) : menghapus data array pada index tertentu
// Fungsi: menghapus data array pada index tertentu 
let mobil = ["Daihatsu, Toyota, Lexus, BMW"];
console.log ("Sebelum Dihapus: " , mobil);
mobil.splice(2,1); 
console.log ("Sesudah Dihapus:", mobil);

// Fungsi: menyisipkan data baru 
console.log("Sebelom disisipkan", mobil);
mobil.splice(2, 0 , "Lexus" , "Mazda" ,"Wuling");
console.log("Sesudah disisipkan", mobil);

// Fungsi: Mengganti Data 
console.log("Sebelom Diganti", mobil);
mobil.splice(1,1, "FERRARI");
console.log("Sesudah Diganti", mobil);

// namaVariableArray.slice(startIndex, endIndex);
console.log(mobil.slice(1,4))

// namaVariableArray.includes("data"): memeriksa ada data atau tidak pada array 
console.log(mobil.includes("Lexus")); // True
console.log(mobil.includes("Isuzu")); // False

// namaVariableArray.IndexOf ("data"); mencari alamat index dari suatu data 
console.log (mobil.indexof("BMW")); // 5 
console.log (mobil.indexof("ISUZU")); // -1

