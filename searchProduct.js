let products=[
    {name:"samsung",price:50000},
    {name:"nokia",price:40000},
    {name:"iphone",price:150000},
    {name:"oneplus",price:120000},
    {name:"lg",price:10000}
];
function search(products,searchText) {
    let product=[];
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if (element.name.includes(searchText)) {
            product=element;
        }
        
    }
    return product;
}
console.log(search(products,'iphone')); 