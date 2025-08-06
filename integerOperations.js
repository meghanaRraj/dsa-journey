class IntegerOperations {
    
    current;
    constructor(number){
        this.current = number;
    }
    
    // Option 1 - convert to string, reverse string, back to number 
    // Option 2
    reversal1(){
        let sign = 1;
        if (this.current < 0) sign = -1;
        let reversed = 0;
        let current = this.current * sign;
        
        while(current != 0 ){
            reversed = reversed * 10 + current % 10;
            current = parseInt(current/10)
        }
        return reversed * sign;
        
    }
    
    
}

const myNumber1 = new IntegerOperations(1234);
console.log(myNumber1.current);
console.log(myNumber1.reversal1());

const myNumber2 = new IntegerOperations(-1234);
console.log(myNumber2.current);
console.log(myNumber2.reversal1());
