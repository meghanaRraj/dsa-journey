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
    
    toTitleCase(){
        return this.currentString
                            .toLowerCase()
                            .split(" ")
                            .map((word)=> (word[0]?.toUpperCase() || "") + word.slice(1)
                               )
                               .join(" ")
                            
    }
    
}

let myString = new StringOperations("namaste to india and my home  ");
let myString2 = new StringOperations("f");

console.log(myString.reverse1());
console.log(myString.reverse2());
console.log(myString.isPallindrome());
console.log(myString2.isPallindrome());
console.log(myString.toTitleCase());
console.log(myString2.toTitleCase());
