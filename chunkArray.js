// Question : Given an array of numbers and a chunkSize, return an array of arrays with the chunks

const chunkArray = (originalArray, chunkSize) => {
    let chunks = [];
    let pointer = 0;
    do{
        chunks.push(originalArray.slice(pointer, pointer+chunkSize));
        pointer+=chunkSize;
    }while(pointer < originalArray.length );
    
    return chunks;
}

console.table(chunkArray([1,2,3,4,5,6,7,8,9,10], 3));
