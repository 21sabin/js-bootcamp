const reverse = function (sentence) {
    var words = sentence.split(' ');
    var newReverseSentence = [];
    words.forEach(word => {
        var wordArr = word.split('');
        var reverse = '';
        for(var i = wordArr.length - 1 ; i >=0 ; i --){
            reverse+=wordArr[i]
            console.log(reverse,"reverse")
        }
        newReverseSentence.push(reverse)
    });
    return newReverseSentence.join(' ');

}



console.log(reverse("reverse this word"),"result")
