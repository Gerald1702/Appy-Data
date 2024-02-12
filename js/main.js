// alert('We are Beta!!!')
console.log('We are Beta!!!')

var firstname  = "Gerald";
var age =  25;

let lastname =  'Ampadu';
const boilingWaterTemperature  = 100 ;

var firstname = 'Abigail'
// boilingWaterTemperature = 120;

// let is used for variable declaration, it can be reassigned but not its value

let bottle = {
    color: 'blue',
    volume: 580,
    canStoreWater: true,
    storeWater: null 
}
console.log(firstname, age, lastname,  boilingWaterTemperature);


// Conditional Statement (if/Else)
if(age >= 18){
    console.log("You are eligible.");
} else {
    console.log('Wait till you are eighteen')
}

// loops (For)
for(let i = 1; i < 8; i++) {
    console.log('I am at index:', i)
    }

    function isEligible(){
        if(age >= 18){
            console.log("You are eligible.");
        } else {
            console.log('Wait till you are eighteen')
        }

    }

    // Function -Invoking
    isEligible()
