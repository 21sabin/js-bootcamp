// 1 write a function that capitalize first lettr of senetence

function caplitalize(str) {
    let sentence = '';
    let array = str.split(' ');
    for (let i = 0; i < array.length; i++) {
        let val = array[i].length > 0 ? array[i].slice(1, array[i].length) : '';
        let char = array[i].charAt(0).toUpperCase();
        sentence = sentence + ' ' + char + val
    }
    return sentence
}

function capitalize2(str) {
    let words = []
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

console.log(capitalize2('i want to be a great developer'));