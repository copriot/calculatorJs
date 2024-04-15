const display = document.querySelector('.calculator-input');
const key = document.querySelector('.calculate-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();
//inputtaki değeri aldisplayValue içine at
function updateDisplay() {
    display.value = displayValue;
}
//calculate-keys divi içindeki tıklamaya olay izleyici verdim ve elemente atadım
key.addEventListener('click', function(e){
    const element = e.target;
    
    if(!element.matches('button'))return; //element buttonla eşleşmiyorsa fonksiyonu durdur
    if (element.classList.contains('operator')){
      //  console.log('operator',element.value);
      handleOperator(element.value);
      updateDisplay();
      return;
    };
    if (element.classList.contains('decimal')){
        //console.log('decimal',element.value);return;
        inputDecimal();
        updateDisplay();
        return;
    };
    if (element.classList.contains('clear')){
        //console.log('clear',element.value);return;
        clear();
        updateDisplay();
        return;
    };
  // console.log('number',element.value);
  //buttondaki değeri updateDisplay fonksiyonu değerine eşitle
  inputNumber(element.value);
  updateDisplay();
});
//ilk başta 0 sa sayıyı yaz değilse önceki değerin yanına yeni tıklanan değeri ekle

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if(operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function calculate(first, second, operator) {
    if(operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second
    } else if (operator === '/') {
        return first / second;
    }
    return second;
}

function inputNumber(num) {
    if(waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === '0'? num: displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function clear() {
    displayValue = '0';
}