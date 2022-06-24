const { TripOriginSharp } = require("@mui/icons-material");

const NumbersButtons =document.querySelectorAll('.numbers');
const OperatorButton = document.querySelectorAll('.operator');
const ResetButton = document.querySelector('.clear')
const EqualsButton = document.querySelector('.equals')
const PreviousValue = document.querySelector('.previous')
const CurrentValue = document.querySelector('.current')

class Calculator{
    constructor(PreviousValue, CurrentValue){
        this.PreviousValue = PreviousValue;
        this.CurrentValue = CurrentValue;
    }
  
     
    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
}

const calculator = new Calculator(PreviousValue, CurrentValue)
    NumbersButtons.map((button) => {
            button.addEventListener('click', () => {
                calculator.append(button.innerText)
            })
    })
