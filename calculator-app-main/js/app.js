
const NumberButtons =document.querySelectorAll('.number');
const OperatorButton = document.querySelectorAll('.operator');
const ResetButton = document.querySelector('.clear')
const DeleteButton = document.querySelector('.delete')
const EqualsButton = document.querySelector('.equals')
const PreviousValue = document.querySelector('.previous')
const CurrentValue = document.querySelector('.current')

// class Calculator{
//     constructor(PreviousValue, CurrentValue){
//         this.PreviousValue = PreviousValue;
//         this.CurrentValue = CurrentValue;
//         this.clear()
//     }
//   clear(){
//     this.previousOperand=""
//     this.currentOperand =""
//     this.operation = undefined;
 
//   }

//   //function to delete a single value form the display
//     delete() {
//         this.currentOperand  = this.currentOperand.toString().slice(0, -1)
    
//         console.log(this.currentOperand)
//     }


//     appendNumber(number){
//         if(number === "." && this.currentOperand.includes(".")) return
//         this.currentOperand = this.currentOperand.toString() + number.toString();
      
//     }

//     chooseOperation(operation){
//         if(this.currentOperand === "") return;
//         this.operation = operation;
//         this.previousOperand = this.currentOperand
//         this.currentOperand =""
//     }

//     getDisplayNumber(number) {
//         const floatNumber = parseFloat(number);
//         if(isNaN(floatNumber)) return ""
//         return floatNumber.toLocaleString('en')
//     }



//     updateDisplay(){
      
//         this.CurrentValue.innerText = this.getDisplayNumber(this.currentOperand);
//         if(this.operation!=null){
//             this.PreviousValue.innerText = `${this.getDisplayNumber(this.previousOperand)} ${(this.operation)}`
//         }
     
//     }


// }

// const calculator = new Calculator(PreviousValue, CurrentValue)
   
// //displaying value on the calculator screen
// NumberButtons.forEach((button) => {
//             button.addEventListener('click', () => {
//                 calculator.appendNumber(button.innerText)
//                 calculator.updateDisplay()
//             })
//     })

//     console.log(NumberButtons)


// OperatorButton.forEach((button) => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText);
//         console.log(button.innerText)
//         calculator.updateDisplay()
//     })
// })

//     //deletes all the values on the screen;
//     ResetButton.addEventListener('click',() => {
//         calculator.clear();
//         calculator.updateDisplay();
//     })


//     //deletes an individual value on the screen
//     DeleteButton.addEventListener('click', () => {
//         calculator.delete();
//         calculator.updateDisplay();

//     })



class Calculator{
    constructor(PreviousValue, CurrentValue){
        this.PreviousValue = PreviousValue;
        this.CurrentValue = CurrentValue;
        this.clear()
    }

    clear(){

        this.currentOperand = "";
        this.previousOperand = "";
        this.operator =undefined;

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number){

        //check if the number is a decimal  or the currentOperand includes a decimal point so as to avoid it
        if(number ==="."  && this.currentOperand.includes(".")) return 
        return this.currentOperand = this.currentOperand.toString() +  number.toString() ;
    }

 

    chooseOperator(operator){
        if(this.currentOperand === "") return;
        if(this.previousOperand !=+ ""){
            this.compute()
        }
        this.operator = operator
  
        this.previousOperand = this.currentOperand;
        this.currentOperand =""

    }


compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev)  || isNaN(current)) return 
switch (this.operator) {
    case  "+":
     return computation = prev + current;
     
        break;
    case "-":
        computation = prev - current;
   
        break;
    case "x":
        computation = prev * current;
       
        break;
    case "/":
        computation = prev / current;
       
        break;

    case "%":
        computation = prev % current;

        break;
    default:
        return;

        
}
   
    this.currentOperand = computation
    this.previousOperand = ""
    this.operator =undefined

}



    //this used to just format our this.currentOperand and add comas
    getDisplayNumber(number){
        const floatNumber = parseFloat(number);
        if(isNaN(floatNumber)) return ""
        return floatNumber.toLocaleString('en')
    }

    
    updateDisplay(){
        this.CurrentValue.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operator != null){
     this.PreviousValue.innerText = `${this.getDisplayNumber(this.previousOperand) } ${(this.operator)}`
            console.log(this.operator)
        }else{
this.PreviousValue.innerText =""
      }

    }
}


const calculator = new Calculator(PreviousValue, CurrentValue)
NumberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})


OperatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay();
    })
})


EqualsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay();
    console.log('calculations performed')
})
ResetButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay();
   
})

DeleteButton.addEventListener('click', (e) => {
    calculator.delete()
    calculator.updateDisplay()
})