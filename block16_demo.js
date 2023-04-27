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

const price = (customer) => customer.refills * customer.pricePerRefill

const HasSubscription = (customer) => customer.subscription ? price(customer) - price(customer) * 0.25 : price(customer)

const hasCoupon = (customer) => customer.coupon ? HasSubscription(customer) - 10 : HasSubscription(customer)

const TotalAmount = (customer) => HasSubscription(customer)

const TimmyTotal = TotalAmount(timmy)
const SarahTotal = TotalAmount(sarah)
const RockyTotal = TotalAmount(rocky)

console.log('Timmy your grand total is (TimmyTotal)')
console.log('Sarah your grand total is (SarahTotal)')
console.log('Rocky your grand total is (RockyTotal)')
