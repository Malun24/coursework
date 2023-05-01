//declare dinner as an object while using food as keys and price as values
const dinner = {
    cheeseburger: 12,
    steak: 20,
    soup: 8,
    mac: 14,
    combo: 16,
}
//array for food during the dinner
console.log(object.keys(dinner));
//array for prices during the dinner
console.log(objects.values(dinner));
//add up price total for objects
const prices = Object.values(dinner);
let totalCost = 0;

for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
}

console.log(totalCost);