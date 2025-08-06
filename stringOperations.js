// String operations


class StringOperations {
    
    currentString;
    
    constructor(inputString){
        this.currentString = inputString;
    }
    
    // option 1
    reverse1(){
        let newString = '';
        for(let i = this.currentString.length - 1; i >= 0 ; i -- ){
            newString += this.currentString[i];
        }
        return newString;
    }
    
    reverse2(){
        return this.currentString.split('').reverse().join('')
    }
    
    isPallindrome(){
        let newString = this.reverse2().toLowerCase();
        return this.currentString.toLowerCase() == newString
        
        
    }
    
}

let myString = new StringOperations("Namaste");
let myString2 = new StringOperations("MalayalaM");

console.log(myString.reverse1());
console.log(myString.reverse2());
console.log(myString.isPallindrome());
console.log(myString2.isPallindrome());
