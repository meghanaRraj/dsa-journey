//Custom Array Implementation

class CustomArray {
    
    length;
    data;

    constructor(){
        this.length = 0;
        this.data = {};
    }
    
    push(item){
        this.data[this.length] = item;
        this.length++;
    }
    
    get(index){
    if(index<0 || index > this.length) return "Error, invalid index"
    return this.data[index];
    }
    
    pop(){
        let length = this.length;
        if(length == 0) return "Array is empty, nothing to delete";
        
        let value = this.data[length-1];
        
        delete this.data[length-1];
        this.length --;
        
        return value;
        
    }
    
    shift(){
      if(this.length == 0) return "Array is empty, nothing to delete";
      let value = this.data[0];
      for(let index in this.data){
          let parsed = parseInt(index);
          this.data[parsed] = this.data[parsed + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
      return value;
    }
    
    unshift(item){
      for( let i = this.length; i > 0 ; i -- ){
          this.data[i] = this.data[i-1];
      }
      this.data[0] = item
      this.length++;
    }
    
    deleteByIndex(index){
        if(this.length == 0) return "Array is empty";
        if (index < 0 || index >= this.length) return "Invalid array index";
        let value = this.data[index];
        for(let i = index; i<this.length;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length --;
        
    }

}

const myArray = new CustomArray();
myArray.push(10);
myArray.push('megghana');
console.table(myArray.data);
console.log(myArray.get(1));
console.log(myArray.get(-1));
console.log(myArray.get(3));
console.log(myArray.pop());
console.log(myArray);
myArray.push('kavya');
myArray.push(2001);
myArray.push(2006);
console.table(myArray.data);
console.log(myArray.shift());
console.table(myArray.data);
console.log(myArray.unshift("hilarious"));
console.table(myArray.data);

console.log(myArray.deleteByIndex(2));
console.table(myArray.data);

