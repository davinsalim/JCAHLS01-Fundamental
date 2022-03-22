//  let database = [
//      {
//          name: "Hoodie",
//          stock: 12,
//          price: 75000
//      },
//      {
//          name: "Sepatu",
//          stock: 10,
//          price: 80000
//      },
//      {
//         name: "Handphone",
//         stock: 3,
//         price: 30000
//     },
//     {
//         name: "Laptop",
//         stock: 9,
//         price: 100000
//     }
//  ];

// //let dataset = ['hoodie', 'sepatu', 'piring']
// //let dataset2 = ['10', '15', '20']
// //let dataset3 = ['8000', '7000', '5000']
// //function sum(database) {
//  //   var total = 0;
//    // database.forEach(database => {
//      // total += database.price;
//     //});
//     //console.log(total);
//  // }

//   //sum(database)

// // let i = 0;
// // const duplicateForEach=(cbfn,array) => {
// //     while (i < array.length) {
// //         cbfn(array[i],i)
// //         i++
// //     }
     
// // };
// // let summary = '';
// // duplicateForEach((value, index)=>{
// //     summary += `${index + 1}. ${value.name}, stoknya ${value.stock}, Rp. ${value.price}`
// // }, database)

// // // const listData = () => { 
// // //     database.dup((value, index) => {
// // //         return 
// // //     }).join("\n");
// // // }

// // console.log(summary)

// // const arrKosong =[]

// // const duplicateMap = (cbfn) => {
// //     for (let i=0; i <dataset.length; i++) {
// //         const pushedData = {
// //             "nama":dataset[i],
// //             "stock":dataset2[i],
// //             'price':dataset3[i]
// //         } 
// //         cbfn(pushedData)
// //     }
// // }

// // // let summary = '';

// // duplicateMap((value,index)=> {
// //     arrKosong.push(value)
// // })

// // console.log(arrKosong);

// // const duplicateMap = (cbfn, array) => { 
// //     let tempArr = [];
// //     for (let i = 0; i <array.length; i++) {
// //         tempArr.push(cbfn(array[i], i))
// //     }
// //     return tempArr
// // };
// // let newDb = duplicateMap ((value, index) => {
// //     return `${index + 1}. ${value.name}, stoknya ${value.stock}, Rp. ${value.price}`
// // }, database)
// // console.log(database);
// // console.log(newDb)

// let tempArr = [];
// const duplicateFilter = (cbfn, array) => { 
//     for (let i = 0; i <array.length; i++) {
//        let bool = cbfn(array[i], i) 
//        if (bool == true) {
//             tempArr.push(array[i]);

//        }

//     }
// };


// // let newDb = duplicateFilter ((value, index) => {
// //     if(value.price > 30000)  {
// //        
// //        
// //     }
// // }, database)

// let newDb = duplicateFilter ((value, index) => {    
//     return value.price > 30000
// }, database)

// console.log(tempArr)


// Object Function: 
let student = { 
nama : "Edo Renaldo",
usia : 20,
kelas : "Ipad"
}

// Object.keys(student); // ["nama, "usia", "kelas"]
// console.log(Object.keys(student))

// let tempArr2 = [];
// const duplicateGetKeys=(obj)=>{
//     for (var key in obj){
//         tempArr2.push(key)
//     }
//     return tempArr2;
// };
// console.log(duplicateGetKeys(student)); // ["nama, "usia", "kelas"]

// const duplicateGetValues=(obj)=>{
//     let tempArr2 = [];
//     for (var key in obj){
//         tempArr2.push(obj[key])
//     }
//     return tempArr2;
// };
// console.log(duplicateGetValues(student)); // ["Edo Renaldo, "20", "Ipad"]

const duplicateGetEntries=(obj)=>{
    let tempArr2 = [];
    for (var key in obj){
        tempArr2.push([key, obj[key]])
    }
    return tempArr2;
};
console.log(duplicateGetEntries(student)); // ["nama","Edo Renaldo"],["usia",20] , ["kelas",Ipad"]
