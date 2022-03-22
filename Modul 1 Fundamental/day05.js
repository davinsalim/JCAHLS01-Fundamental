// DAY 05 = OBJECT  => data penampung seperti array, tetapi tidak harus berurutan. Dan Alamatnya menggunakan property

/** Array => Penampung data berdasarkan alamat index
 * Object => Penampung data yang berdasarkan alamat property 
 * 
 * let variableArray = [data1, data2, data3]; 
 * let variableObject = {
 *          namaProperty: data, 
 *          namaProduct:"Sepatu Air Jordan",
 *          price:250000,
 *          isReady:true,
 *          size: [42,43,45]
 *          total:(param)=>{block code}
 * 
 * 
* */
// Menulis Data Object 
// Cara 1: Syntax Object literal 
let instructor ={ 
    name: "Abdi Alghi",
    class: "JCDW",
    age: 27,
    materi: [ 
            "Fundamental", "Front-End", "Back-End"
    ]
};
console.log(instructor.name);
// console.log(instrutor["name"]); //cara kedua

//Cara Kedua: Syntax Object "new keyword"
let student = new Object(); 
student.name = "Andrew"; 
student.age = 23; 
student.class = "Full Stack";
student.age = 18; //re-assign 

// Object Destructuring Object
let {name, age, classes} = student;

console.log (age);
console.log (student);

let product = [

{ 
  name: "hoodie",
  stock: 12,
  price: 75000  
},
{
name: "sepatu",
stock: 15,
price: 15000  
}
];

console.log(product[0].name)

// Object Destructuring Array
let data = ["Edo", "Jr", 27
];
let [namaDepan, namaBelakang, usia] = data;
console.log(namaDepan);
console.log(namaBelakang);
console.log(usia);

// Array of Object
let product = [

{ 
  name: "hoodie",
  stock: 12,
  price: 75000  
},
{
name: "sepatu",
stock: 15,
price: 15000  
}
];
console.log(product[0].name)

// Looping Pada Object
for(let property in instructor){
    console.log(instructor[property]);
}