const display = document.querySelector('.calculator-input');
const key = document.querySelector('.calculate-keys');

let displayValue = '0';


updateDisplay();
//inputtaki değeri aldisplayValue içine at
function updateDisplay() {
    display.value = displayValue;
}
//calculate-keys divi içindeki tıklamaya olay izleyici verdim ve elemente atadım
key.addEventListener('click', function(e){
    const element = e.target;
    
    if(!element.matches('button'))return; //element buttonla eşleşmiyorsa fonksiyonu durdur
    console.log(element);
});