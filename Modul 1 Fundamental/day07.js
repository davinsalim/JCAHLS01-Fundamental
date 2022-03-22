//Class Object of javascript
//Template yang diperuntukan untuk membuat data Object
/**
 * class structure :
 * class className { 
 *          this.propertyName = arg01;
 *          this.properyName = arg02;
 *          }
 * 
 *      method=()=>{
 *              //code
 *          }
 * }
 */

class Manusia {
    constructor(_name, _birth, _age, _gender) {
        this.name = _name;
        this.birth = _birth;
        this.age = _age;
        this.gender = _gender;
    }

    getAge = () => {
        let birthYear = parseInt(this.birth.split("-")[2])
        return 2022 - birthYear
    }
    introduce = () => {
        return `My Name is ${this.name}, I was born at ${this.birth}, I am a ${this.gender} years old`
    }
}

let dataPenduduk = [ ]; 

dataPenduduk.push(new Manusia("Renold", "12-11-1980", 20, "L"));
dataPenduduk.push(new Manusia ("Reva", "12-10-2000", 18, "P"));

console.log(dataPenduduk);
let list = dataPenduduk.map ((value, index) => {
    return `${index +1}.` + value.introduce()
})


class Perkerjaan extends Manusia {
    constructor(_name, _birth, _gender, _profession, _salary) {
        super(_name, _birth, _gender); // menggunakan property dari kelas pertama
        this.profession = _profession;
        this.salary = _salary;
        this.age= this.getAge ();

    }
}

let dbJob = []; 

dbJob.push(new Perkerjaan ("Arnold", "13-10-1985", "Male", "Chef", 300000))
console.log(dbJob);

// let jobDesc = {
//     job: "Prepare Tools", 
//     getStatus: () => {
//         return `Done`
//     }
// }