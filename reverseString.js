const reverseString = (string)=>{

    let oldString = string.split('');

    oldString.reverse();

    let newString = oldString.join('');

    return newString;
}

console.log(reverseString('Hello'))