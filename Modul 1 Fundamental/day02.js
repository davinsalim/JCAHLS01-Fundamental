////////// LOOP STATEMENT ////////////
// LOOP : PERULANGAN 

/* A. While Loop: Digunakan ketika akhir loop tidak pasti 
*
*while(condition) {
    //program yang ingin dijalankan
}
* */ 
//CTRL C = untuk stop infinite loop
//Example :
let nilai = 10; 

while (nilai > 0) {
    console.log("angka :", nilai)
    nilai--;
}

/**
 * B. DO....WHILE LOOP
 * 
 * do{
 * //program yang ingin dijalankan
 * }while (condition);
 */

let count =1; 
do { 
    console.log(`Bus No. ${count}`)
    count ++;
} while(count <= 10);


/**
 * C. FOR LOOP STATEMENT : Digunakan ketika kita tau batas looping
 * 
 * for(statement_1; statement_2;statement_3){
 * // Pprogram yang ingin dijalankan
 * }
 * statement_1: variable yang mendefinisikan nilai awal dari batas looping 
 * statement_2: condition untuk memeriksa variable statement_1 dengan batas loopingnya, apakah bernilai true (comparison operator)
 * statement_3: berisi perintah increment atau decrement terhadap statement_1
 * 
 * keuntungannya: dapat membatasi langsung jumlah loop sejak awal 
 * 
 * % = modulus, apabila bernilai sama 
 */

for(let i = 1; i < 10; i++){
    if(i%2 == 0){
        console.log(`Kereta No.${i} Genap`)
    
    }else{
        console.log(`Kereta No.${i} Ganjil`)
    }
}

for(let i = 3; i < 30; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(`BizzBuzz==>>`,i)
    
    }else if (i%3 == 0){
        console.log(`Bizz==>>`,i)
    }else if (i%5 == 0){
        console.log(`Buzz==>>`,i)}
}