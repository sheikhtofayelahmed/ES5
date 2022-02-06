const phones=[
    {name:'samsung',price:55000},
    {name:'nokia',price:25000},
    {name:'xiaomi',price:45000},
    {name:'htc',price:35000},
    {name:'apple',price:165000},
    {name:'walton',price:5000}
];
let cheapestPhone=phones[0];
for (const phone of phones) {
    if (phone.price<cheapestPhone.price) {
        cheapestPhone=phone;
    }
}
console.log(cheapestPhone)