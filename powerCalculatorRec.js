const powerCalculatorRec = (base, exponent)=>{
    if(exponent === 0){
        return 1;
    }

    return base * powerCalculatorRec(base, exponent - 1);
}

console.log(powerCalculatorRec(10, 2))