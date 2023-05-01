const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

const discount = (obj) => {
    let totalPrice = obj.pricePerRefill * obj.refills;
    let result;

    if (obj.subscription && !obj.coupon) {
        result = totalPrice - totalPrice / 4;
    } else if (obj.coupon && !obj.subscription) {
        result = totalPrice - 10;
    } else if (obj.coupon && obj.subscription) {
        result = (totalPrice - totalPrice / 4) - 10;
    }
    return result;
};

const TimmyTotal = discount(timmy);
console.log(`Timmy your grand total is ${TimmyTotal}`);
const SarahTotal = discount(sarah);
console.log(`Sarah your grand total is ${SarahTotal}`);
const RockyTotal = discount(rocky)
console.log(`Rocky your grand total is ${RockyTotal}`);