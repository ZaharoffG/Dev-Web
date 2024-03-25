let array = [1,2,3,4,'abc', [1,2], 5];
console.log('length');
console.log(array.length);
console.log('buscando elementos por indice');
console.log(array[0]);
console.log(array[4]);
console.log(array[5]);
console.log(array[5][1]);

console.log('funcionalidade do pop');
console.log('array original: ');
console.log(array);
num = array.pop();
console.log('tamanho do array depois do pop: '+ array.length);
console.log('array depois do pop: ');
console.log(array);
console.log('valor obtido pelo pop: '+num);

console.log('funcionalidade do push');
console.log('adicionando "novo elemento" ao final do array:')
array.push('novo elemento');
console.log('array depois do push: ');
console.log(array);
console.log('tamanho do array depois do push: '+array.length);

console.log('funcionalidade do shift');
console.log('array antes do shift: ');
console.log(array);
num2 = array.shift();
console.log('array depois do shift: ');
console.log(array);
console.log('valor obtido pelo shift: '+num2);

console.log('funcionalidade do unshift');
console.log('array antes do unshift: ');
console.log(array);
console.log('adicionando "unshift" ao inicio do array usando unshift');
array.unshift('unshift');
console.log('array depois do unshift: ');
console.log(array);

console.log('trocando valor de um elemento usando indice: ');
console.log('array antes da mudança: ');
console.log(array);
array[0] = 'mudança';
console.log('array depois da mudança:');
console.log(array)

console.log('adicioando elemento ao array no indice 20 (pulando indices)');
array[20] = 'oi';
console.log('array com novo elemento: ');
console.log(array);

console.log('acessando indice inexistente do array');
console.log(array[200]);

let a = 4;
const b = 4;
var c = 4;

if(c === 4){
    var c = 6;
    console.log('var:' + c);
}
console.log('var:' + c);

if(a === 4){
    let a = 5;
    console.log('let:' + a);
}
console.log('let:' + a);

console.log('const:' + b);
if(b===4){
    b = 5;
    console.log('const:' + b);
}

