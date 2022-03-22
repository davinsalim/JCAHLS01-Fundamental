////////////////// CONDITIONAL STATEMENT ///////////////////////

/**
 * Aturan: Membutuhkan Nilai Boolean 
 * Jenis:
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF....ELSE STATEMENT : untuk 2 kondisi
 * 3. IF....ELSE IF ....ELSE STATEMENT  : untuk lebih dari >= 3 kondisi 
 * SWITCH....CASE STATEMENT : Lebih untuk memastikan sebuah nilai dengan case yang ditentukan 
 */

// 1. IF STATEMENT 

let nama = "leonardo"; 
let usia = 18;
let email = "leo@mail.com";

/**
 * Aturan penulisan:
 * if (condition){
 * // TASK
 * }
 * Note : 
 * -condition : kondisi yang di inginkan bernilai boleean
 * -task: apa yang ingin dicapai ketika kondisi terpenuhi
 */

// EXAMPLE CASE : ingin memverifikasi usia pendaftaran sim harus minimal 17 tahun 
if (usia >=17) {
    console.log("Verifikasi usia berhasil:", nama); //Cara 1
    console.log(`Verifikasi usia ${nama} berhasil: periksa email ${email} anda`); //Cara 2
}

// 1. IF .... ELSE STATEMENT 
if (usia >=17) {
    //task
    console.log(`Verifikasi usia ${nama} berhasil: periksa email ${email} anda`); 
} else {
    console.log(`Verifikasi usia ${nama} gagal`)
}

// 2. IF....ELSE IF ....ELSE STATEMENT:
let nilai =50; 

if(nilai >=90){
    console.log("GRADE A", nilai)
}else if (nilai >=80 && nilai <= 89){
    console.log("GRADE B", nilai)
}else if (nilai >=70 && nilai <= 79){
    console.log("Grade C", nilai)
}else {
    console.log("Grade D",nilai)
}

// 3. SWITCH CASE 
let profesi = "Dokter";
switch(profesi){
    case "Coder":
        //task
         console.log ("saya suka bikin aplikasi");
         break;
    case "Dokter": 
         console.log ("Saya suka mengobati orang");
         break;
    case "Polisi": 
        console.log ("Saya suka nilang")
        break;
    default:
        console.log("Gag tau ngapain")
        break;
}

// Ternary Operator : condition ? task : task 
let validasi_usia = usia >17 ?"usia cukup" : "usia tidak cukup"
console.log(validasi_usia); 