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

console.log(db)
