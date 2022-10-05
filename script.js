//#region variables

let num1;
var num2;
let num3;
const num4 = [1,2,3,4,7,5,6];

//#endregion

//#region funcion

function suma (num1, num2){
    const r = num1 + num2;
    return r;
}

function resta(num1, num2){
    const r2 = Math.sqrt(num1) - num2;
    return r2;
}

function calculos(num1,num2,num3){
    const r3 = (Math.pow(num1,3)*num2)/num3;
    return r3;
}  

//#endregion

//#region for de arreglos

for(i=0;i<num4.length;i++){
    console.log(num4[i]);
}

//#region llamar funcion

const resultado = (11, 89);
const resultado2 = resta(9, 1);
const resultado3 = calculos(9,11,15);

//#endregion

//#region console

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

//#endregion

