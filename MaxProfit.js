// Question : Given an array of numbers where you can buy on one day and sell on a consecutive day. Which days should you buy and sell to get the highest profit
class MaxProfit{
    pricesEveryday;
    
    constructor(dailyPrices = []){
        this.pricesEveryday = dailyPrices;
        this.findMaxProfit();
    }
    
    findMaxProfit(){
        let dailyPrices = this.pricesEveryday;
        
        
        let highestProfit = dailyPrices[1] - dailyPrices[0];
        let indexA = 0;
        let indexB = 1;
        
        for (let index = 0; index < dailyPrices.length; index++){
            let currentPrice = dailyPrices[index];
            let workingPrices = Array.from(dailyPrices).splice(index+1);
            let max = Math.max(...workingPrices);
            let maxIndex = dailyPrices.indexOf(max);
            let currentProfit = max - currentPrice;
            console.log(currentPrice, " ", max , " index = ",maxIndex, " ",currentProfit );
           
            highestProfit = Math.max(highestProfit, currentProfit) == Infinity ? highestProfit :  Math.max(highestProfit, currentProfit);
            
            if(currentProfit == highestProfit) {
                indexA = index;
                indexB = maxIndex;
            }
            
        }
        
        console.log("Highest Profit of "+highestProfit+" was found by buying on Day "+(indexA+1)+" and selling on Day "+(indexB+1));
        
        
    
    }
}

const test = new MaxProfit([7,1,5,3,6,4]);
