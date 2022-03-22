/**
 * 1.Array of Objeck
 * 2. Juga digunakan untuk data JSON (Javascript Object Notation)
 * 3. Struktur Penulisan :
 *          let arrObj = [
 *              {
 *                id:1,
 *                 nama: "Jacket",
 *                  stock:[
 *                      {
 *                         type: "Red"
 *                         qty: 20
 *                      }
 *                    ],
 *                              }
 *                      ]
 * array.map() ===> Ditujukan untuk mengolah data Array of Object
 * array.filter() ===> Ditujukan untuk memfilter data array of Object
 * Array.findIndex () ===> Ditujukan untuk mencari alamat index ==> Output : Number
 */

let dataProduct = [
    {
        nama: "Jacket",
        price: 75000,
        stock: [
            {
                type: "M",
                qty: 8
            },
            {
                type: "L",
                qty: 12
            },
            {
                type: "XL",
                qty: 5
            }
        ]
    }
]
console.table(dataProduct);
let searchData=dataproduct.filter((value,index)=>{
    return value.name == "hat"
})

let dataIdx = dataProduct.findIndex((value,index)=>{
    return value.name == "hat"
})

console.table(searchData);
console.table(dataIdx);
dataProduct[dataIdx].name = "topi"

// Concatination ==> Penggabungan data
let mobil = ["Tesla", "Ferrari", "Lamborghini"];
let motor = ["Honda","Yamaha", "Kawasaki"];
let kendaraan = mobil.concat(motor);
console.log (kendaraan)
// let kendaraan =mobil.concat (motor, ["KTM, "Wuling"]);
// let kendaraan = [...mobil, ....motor, "Harley", "HasQ"];

let sepedaMotor = [...motor];
sepedaMotor [0] = "SUZUKI";

console.log (motor)
console.log (sepedaMotor)

let dbA = {
    nama: "Davin",
    alamat: "BSD"

}
let dbB = {
    perkerjaan: "Coder",
    gaji: 7500000
}


let dataDB = {...dbA, ...dbB, alamat:"Sudirman Thamrin", status: "Aktif "};
console.log(dataDB);