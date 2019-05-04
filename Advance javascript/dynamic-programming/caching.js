//caching and memorization for dynamic programming
function memorizeAddTo80(){
    let cache = {};
    return function(n){
        console.log(cache)
        if(n in cache){
            return cache[n];
        }else {
            console.log('long time')
            cache[n]=n+80;
            return cache[n];
        }
    }
}
const memorize = memorizeAddTo80();
console.log(memorize(3))
console.log(memorize(4));
console.log(memorize(3))

