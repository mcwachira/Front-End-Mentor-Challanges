

const NumberButtons =document.querySelectorAll('.number');
const OperatorButton = document.querySelectorAll('.operator');
const ResetButton = document.querySelector('.clear')
const DeleteButton = document.querySelector('.delete')
const EqualsButton = document.querySelector('.equals')
const PreviousValue = document.querySelector('.previous')
const CurrentValue = document.querySelector('.current')

class Calculator{
    constructor(PreviousValue, CurrentValue){
        this.PreviousValue = PreviousValue;
        this.CurrentValue = CurrentValue;
        this.clear()
    }
  clear(){
    this.previousOperand=""
    this.currentOperand =""
 
  }
    delete() {
        this.currentOperand = CurrentValue.innerText.slice(0, CurrentValue.innerText.length)
    
        console.log(this.currentOperand)
    }


    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
      
    }
    getDisplayNumber(number) {
        const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) return ""
        return floatNumber.toLocaleString('en')
    }



    updateDisplay(){
      
        this.CurrentValue.innerText = this.getDisplayNumber(this.currentOperand);
        console.log(this.CurrentValue.innerText)
    }


}

const calculator = new Calculator(PreviousValue, CurrentValue)
   
//displaying value on the calculator screen
NumberButtons.forEach((button) => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
            })
    })

    console.log(NumberButtons)


    //deletes all the values on the screen;
    ResetButton.addEventListener('click',() => {
        calculator.clear();
        calculator.updateDisplay();
    })


    DeleteButton.addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();

    })