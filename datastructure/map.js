const m = new Map([['color', 'red'], ['age', 2]]);
console.log('map', [...m.keys()]);
let dice = [3, 3, 3, 4, 4]
console.log('get ', m.get('color'))

// for (const k of m.keys()) {
//     console.log(m.get(k))
// }

freq = (dice) => {
    let freqs = new Map();
    console.log('sdfd', freqs.get(1))
    for (let d of dice) {
        freqs.set(d, (freqs.get(d) || 0) + 1)
    }
    console.log('freqs', freqs)
}

freq(dice)


for (const [k, v] of m.entries()) {
    console.log(k, v)
}