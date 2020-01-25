const input = document.querySelector('input');
const addClassButton = document.getElementById('addClass');
var addClassFlag = false

addClassButton.addEventListener('click', () => {
    addClassFlag = !addClassFlag;
    if (addClassFlag) {
        addClassButton.classList.add('is-active')
    } else {
        addClassButton.classList.remove('is-active')
    }

})

const onInput = (event) => {
    test()
}

const test = () => {
    console.log('debounce test')
}

const debounce = func => {
    return (...args) => {
        console.log('argu', args);
        func('debounc function reutyrn')
    }
}
const button = document.querySelector('button');
const h1 = document.getElementById('title')
button.addEventListener('click', () => {
    // h1.style.display = 'none'
    const div = document.createElement('div');
    div.innerHTML = `<p>div elemetncreated </p>`
    document.getElementById('container').appendChild(div)
})
input.addEventListener('input', debounce(onInput))


const wrapper = fun => {
    return (...args) => {
        fun.apply(null, ...args);
    }
}

const add = (a, b) => {
    return a + b;
}

wrapper(add);

new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
})

//global event listener
document.addEventListener('click', (evet) => {
    console.log(event.target)
    if (document.contains(input)) {
        console.log('true')
    } else {
        console.log('flase')
    }
})

