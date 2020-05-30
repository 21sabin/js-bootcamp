// const map = new Map();

// map.set('firstname', "Jake");
// map.set('lastname', 'gyllenhal');
// map.set('flims', ['Good will hunting', 'source code', 'south paw'])

// console.log(map)

// const luke = {
//   firstName: 'Luke',
//   lastName: 'Skywalker',
//   occupation: 'Jedi Knight',
// }

// const map = new Map(Object.entries(luke))
// console.log(map)

// const obj = Object.fromEntries(map)
// console.log(obj)


let receipe = new Map([
  ['chocolate', 300],
  ['noodels', 100],
  ['drinks', 100]
]);

for (let key of receipe.keys()) {
  console.log(key)
}
for (let key of receipe.values()) {
  console.log(key)
}
for (let key of receipe) {
  console.log(key)
}
