let db = [
    {
        idproduct: 1,
        name: "Hoodie",
        stock: 12,
        price: 75000
    },
    {
        idproduct: 2,
        name: "Sepatu",
        stock: 10,
        price: 80000
    }
];

let beli = [
    {
        iduser: 1,
        user: "budi",
        keranjang: [
            {
                idproduct: 2,
                qty: 2,
                subtotal: 160000
            },
            {
                idproduct: 1,
                qty: 2,
                subtotal: 150000
            },
        ]
    },
    {
        iduser: 2,
        user: "Edo",
        keranjang: [
            {
                idproduct: 1,
                qty: 1,
                subtotal: 75000
            },
        ]
    },
    {
        iduser: 3,
        user: "Edi",
        keranjang: [
            {
                idproduct: 2,
                qty: 5,
                subtotal: 400000
            },
        ]
    }
]

const getInfo = (database, cart) => {
    let cartArr= [];
    for (i = 0; i<cart.length; i++){
        for (j =0; j< cart[i].keranjang.length; j++) {
            let saleData = cart[i].keranjang[j]
            let productId = saleData.idproduct
            let dbIndex = 0
            while(dbIndex < database.length){
                if (productId == database[dbIndex].idproduct) {
                    cartArr.push({
                        idproduct:productId,
                        name:database[dbIndex].name,
                        stock:database[dbIndex].stock - saleData.qty,
                        price: database[dbIndex].price,
                        salesQty:saleData.qty,
                        omset:saleData.subtotal,
                        totalStock: database[dbIndex].stock 
                    })
                }
                dbIndex ++
            }
        }
    }
    console.log(cartArr)
}

getInfo(db, beli)

