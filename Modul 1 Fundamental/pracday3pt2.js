
class Product {
    constructor(_pid, _name, _stock, _price) {
        this.pid = _pid; //product id
        this.name = _name; // product name
        this.stock = _stock; // item stock
        this.price = _price; // item price
    }
}
class Buyer extends Product {
    constructor(_pid, _bid, _buser, _bqty) {
        super(_pid); // menggunakan property dari kelas pertama
        this.bid = _bid; // buyer id
        this.buser = _buser; // buyer username
        this.bqty= _bqty; // buyer quantity
    }
}

let db = [ ]; 

db.push(new Product(1,"Hoodie", 12, 75000));
db.push(new Product(2, "Sepatu", 10, 80000));

db.push(new Buyer(2, "Sepatu", 10, 80000));
db.push(new Buyer(2, "Sepatu", 10, 80000));
db.push(new Buyer(2, "Sepatu", 10, 80000));


console.log(db)

// console.log(getreport(db,beli))
