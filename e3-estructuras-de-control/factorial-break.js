//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while,
//  una bifurcación if y una sentencia break

let i = 1;
let fact = 1;
while(true){
    fact = fact * i;
    i++;
    if(i === 10){
        break;
    }
}
console.log(fact);