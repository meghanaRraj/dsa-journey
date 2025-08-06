class FizzBuzz {
    
    n
    
    constructor(number){
        
        this.n = number
    }
    
    businessLogic(){
        for(let i =1; i <= this.n ;i++){

            if (this.divisibleByNum(i,15)) console.log("FizzBuzz");
            else if (this.divisibleByNum(i,3)) console.log("Fizz");
            else if (this.divisibleByNum(i,5)) console.log("Buzz");  
            else console.log(i);
             
            
        }
    }
    
    divisibleByNum(x, num){
        return x%num==0
    }
    
}

new FizzBuzz(10).businessLogic();
