const counter = function (count) {

    if(typeof(count) === 'number'){
        return function(){
            count++;
            return count;
        };
    }
    else{
        return NaN;
    }
    
}

let incrementar = counter(1);

console.log('Primeira chamada: ' + incrementar());
console.log('Segunda chamada: ' + incrementar());
console.log('Terceira chamada: ' + incrementar());