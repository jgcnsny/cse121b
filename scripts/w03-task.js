/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;

}

function addNumbers(){
    let add1 = Number(document.querySelector('#add1').value);
    let add2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(add1, add2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => {
    return number1 * number2;
};

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);

}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1,number2) => {
    return number1 / number2;
};

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);

}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', function(){

    let subtotal = Number(document.querySelector('#subtotal').value)
    
    if (!isNaN(subtotal)){

        let checkbox = document.querySelector('#member');
        if(checkbox.checked){
        
            let total = 0;
            let discount = 0;
            const totalSpan = document.querySelector('#total');

            discount = subtotal * .20 ;

            total = subtotal - discount;

            totalSpan.textContent = `$${total.toFixed(2)}`

        }
        else{
            const totalSpan = document.querySelector('#total');

            totalSpan.textContent = `$${subtotal.toFixed(2)}`
        }
            
    }
    else {
        alert('Please enter a valid numeric amount for the subtotal.');
    
    }
    
} );

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const arrayNum = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = arrayNum;
/* Output Odds Only Array */
const odd = arrayNum.filter((arrayNum) => arrayNum % 2 == 1);
document.querySelector('#odds').innerHTML = odd;
/* Output Evens Only Array */
const even = arrayNum.filter((arrayNum) => arrayNum % 2 == 0);
document.querySelector('#evens').innerHTML = even;
/* Output Sum of Org. Array */

const sumArray = arrayNum.reduce((accumulator,currentValue) => accumulator + currentValue);
document.querySelector('#sumOfArray').innerHTML = sumArray;

/* Output Multiplied by 2 Array */

const multiplyArray = arrayNum.map((x) => x * 2);
document.querySelector('#multiplied').innerHTML = multiplyArray;
/* Output Sum of Multiplied by 2 Array */
 
const sumOfMultipliedArray = multiplyArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipliedArray;

