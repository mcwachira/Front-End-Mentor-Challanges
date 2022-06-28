



const NumberButtons =document.querySelectorAll('.number');
const OperatorButton = document.querySelectorAll('.operator');
const SpecialOperatorButtons = document.querySelectorAll('.specialOperator')
const ResetButton = document.querySelector('.clear')
const DeleteButton = document.querySelector('.delete')
const EqualsButton = document.querySelector('.equals')
const PreviousValue = document.querySelector('.previous')
const CurrentValue = document.querySelector('.current')
const ThemeChanger =document.getElementById('checkbox')
const page = document.querySelector('body');
const ThemeTwo

//change the theme of the page based on the clicking of the checkbox
ThemeChanger.addEventListener('click', () => {
    console.log('clicked')
    page.classList.toggle('background')
})
class Calculator {
    constructor(PreviousValue, CurrentValue){

        this.PreviousValue = PreviousValue;
        this.CurrentValue = CurrentValue

   

        this.clear()
    }

    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.specialOperator = undefined;
        this.operator = undefined;
      
    
    }

    //delete and individual value from the screen
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
       
    }
    //function to get value of each button clicked in order
    appendNumber(number){
        //check if the number is   a decimal of the currentOperand  includes a decimal
        if (number === "." && this.currentOperand.includes(".")) return

        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    //function to choose operand

    chooseOperand(operator){

        if(this.currentOperand ==="")return 
       if(this.previousOperand !=+"")  this.compute()
    
    

        this.operator = operator
       
       this.previousOperand=this.currentOperand;

       this.currentOperand = ""
    }

    chooseSpecialOperand(specialOperator){
   
        // if (this.previousOperand === specialOperator && this.currentOperand !== null) return ""
        if (this.previousOperand !== specialOperator) {
         
            this.specialCompute()
            this.clear()
        }
        this.specialOperator = specialOperator
        this.previousOperand = this.currentOperand;

        this.currentOperand = ""
    }

    compute(){
        let computation;
        let prev =parseFloat(this.previousOperand)
        let current =parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return 
   
    
        switch (this.operator) {
            case "+":
                computation = prev + current
                break;
            case "-":
                computation = prev - current
                break;
            case "x":
                computation = prev * current
                break;
            case "/":
                computation = prev / current
                break;
            case "%":
                computation = prev % current
                break;
    
        
            default:
             return;
        }

        this.currentOperand= computation;
       
        this.previousOperand = ""
        this.operator = undefined;
    }

    specialCompute() {
        let computation;
        let current = parseFloat(this.currentOperand) *Math.PI/180
        if (isNaN(current)) return


        switch (this.specialOperator) {
            case "log":
                computation = Math.log10(current)
                break;
            case "sin":
                computation = Math.sin(current)
                break;
            case "tan":
                computation = Math.tan(current)
                break;
            case "cos":
                computation = Math.cos(current)
                break;
            default:
                return;
        }

        this.currentOperand = computation;

        this.previousOperand = ""
        this.specialOperator= undefined;
    }


    //function to format the numbers pressed
    getDisplayNumber(number){
        const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) return ""

        return floatNumber.toLocaleString('en')
    }


    updateDisplay() {
        this.CurrentValue.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operator != null) {
            this.PreviousValue.innerText = `${this.getDisplayNumber(this.previousOperand)} ${(this.operator)}`
        } else if (this.specialOperator != null) {
            this.PreviousValue.innerText = `${(this.specialOperator)}${this.getDisplayNumber(this.previousOperand)} `
        } 

        else {
            this.PreviousValue.innerText = ""
        }
    }

}

//new instance of the class
const  calculator = new Calculator(PreviousValue, CurrentValue)

//loops over each number  and get its value
NumberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

// loops over each operator button and gets its value
OperatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperand(button.innerText)
        calculator.updateDisplay()

    })
})

//looping over the special operator buttons
SpecialOperatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseSpecialOperand(button.innerHTML)
        // console.log(button.innerText)
        calculator.updateDisplay()

    })
})


//gets value after performing arithmetic operations

EqualsButton.addEventListener('click', () => {
  
        calculator.compute()

        calculator.specialCompute()

 
    calculator.updateDisplay()
})



//remove all values displayed on the screen 

ResetButton.addEventListener('click', () =>{
    calculator.clear()
        calculator.updateDisplay()
    
})


//delete one value from the screen
DeleteButton.addEventListener('click', () => {

    calculator.delete()
    calculator.updateDisplay()
})