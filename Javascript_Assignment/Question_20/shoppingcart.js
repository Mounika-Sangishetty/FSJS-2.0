// In the following shopping cart add, remove, edit items
//    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
//    - add Sugar at the end of your shopping cart if it has not been already added
//    - remove 'Honey'
//    - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// - add 'Meat' in the beginning of your shopping cart if it has not been already added
if(shoppingCart.includes('Meat')){
    console.log("Meat is already added");
}else{
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}

// - add Sugar at the end of your shopping cart if it has not been already added
if(shoppingCart.includes('Sugar')){
    console.log("Sugar is already added");
}else{
    shoppingCart.push('Sugar');
    console.log(shoppingCart);
}

// remove 'Honey'
const index = shoppingCart.indexOf('Honey')
shoppingCart.splice(index,1);
console.log(shoppingCart);

// - modify Tea to 'Green Tea'
const teaindex = shoppingCart.indexOf('Tea');
shoppingCart.splice(teaindex,1,'Green Tea');
console.log(shoppingCart);