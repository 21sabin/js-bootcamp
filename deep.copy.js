// const pizzas = {
//     test: 'sdf',
//     margherita: {
//         toppings: ['tomato sauce', 'mozzarella cheese'],
//         prices: {
//             small: '5.00',
//             medium: '6.00',
//             large: '7.00'
//         }
//     },
//     prosciutto: {
//         toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],
//         prices: {
//             small: '6.50',
//             medium: '7.50',
//             large: '8.50'
//         }
//     }
// }



// let newPizza = pizzas.map(x => {
//     return {
//         ...x,
//         products: x.margherita.pri
//     }
// })
// let packages = [
//     {
//         "AddonPackageId": 3182,
//         products: [{
//             small: '6.50',
//             medium: '7.50',
//             large: '8.50'
//         }]
//     },
//     {
//         "AddonPackageId": 3183,
//         products: [{
//             small: '1.50',
//             medium: '7.50',
//             large: '2.50'
//         }]
//     }

// ];

// let packagesss = packages.map(x => {
//     return {
//         ...x,
//         products: [...x.products]
//     }
// })

// packagesss[0].products = [];
// // let pizzaCopy = { ...pizzas }
// // pizzaCopy.margherita.prices.small = 0;
// // pizzaCopy.test = "new value"
// console.log('pizza copy', packages)


let customer = {
    email: "sabin@gamil.com",
    abc: "test",
    PhoneNumber: {
        MobilePhoneNumber: "(999) 888-7777",
        HomePhoneNumber: "(999) 888-7777",
        WorkPhoneNumber: "(999) 888-7777"
    },
    address: { city: 'kathmandu' }
}

test = () => {
    let filter = '';
    for (let c in customer) {
        console.log('customer', customer[c])
        if (typeof c == 'string' || c == 'PhoneNumber') {
            switch (c) {
                case 'email': filter = filter ? filter + ' ' + customer[c] : filter + customer[c]

                    break;
                case 'PhoneNumber':
                    if (customer[c].MobilePhoneNumber) {
                        filter = filter ? filter + ' ' + customer[c].MobilePhoneNumber : filter + customer[c].PhoneNumber;
                    }
                default: filter = filter
            }
        }
    }
    console.log('test result', filter)
    return filter
}
// filter ? filter + ' ' + customer[c] : filter + customer[c]; console.log('filter', filter)
console.log('filter object', test()) 