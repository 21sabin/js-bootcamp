let pack = {
    'pack1': [{ name: "doc1", flag: false, id: 1 }, { name: 'doc2', flag: false, id: 2 }]
}

// Object.assign(pack, {
//     ['pack1']: pack['pack1'].map(x => {
//         if (x.id == 1) {
//             return { ...x, flag: !x.flag }
//         } else {
//             return { ...x }
//         }
//     })
// });

pack = pack['pack1'].map(x => {
    if (x.id == 1) {
        return { ...x, flag: !x.flag }
    } else {
        return { ...x }
    }
})
console.log('new pack', pack)