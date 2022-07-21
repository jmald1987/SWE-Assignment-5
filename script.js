console.log("Assignment 5")
console.log('')
console.log("Part A")

const LucasWeight = 78;
const LucasHeight = 1.69;
const LucasBMI= 78/(1.69*1.69);
const PeterWeight = 92;
const PeterHeight = 1.95;
const PeterBMI= 92/(1.95*1.95);
const compare=PeterBMI>LucasBMI;

console.log("The BMI of Peter is ", PeterBMI, ". The BMI of Lucas is ", LucasBMI,". Peter's BMI is higher than Lucas's BMI that is", compare,".");
console.log("");
console.log("Part B");



const FofC=32;
const convC=(FofC*(9/5))+32; 
console.log(`${FofC}°C is ${convC}°F.`);
const CofF=32;
const ConvF=(CofF-32)*(5/9);
console.log(`${CofF}°F is ${ConvF}°C.`);
console.log("");
console.log("Part C");
 
if(compare==false){
    console.log(`Peter's BMI, ${PeterBMI}, is less than Lucas's which is ${LucasBMI}.`);
}
else{
    console.log(`Peter's BMI, ${PeterBMI}, is more than Lucas's which is ${LucasBMI}`);
};
console.log("");
console.log("Part D");

const ConvertCelsiusToFahrenheit =(Celsius) =>{
    const ConvertToF=(Celsius*(9/5))+32;
    console.log(`${Celsius}°C is ${ConvertToF}°F.`);
    return;
};
const TempC=[100,0,10];
for(let i=0; i<TempC.length;i++){
    ConvertCelsiusToFahrenheit(TempC[i])
    
}
console.log("")
const ConvertFahrenheitToCelsius =(Fahrenheit) =>{
    const ConvertToC=((Fahrenheit-32)*(5/9))
    console.log(`${Fahrenheit}°F is ${ConvertToC}°C.`);
    return;
};

const TempF=[32,10,102];
for(let i=0; i<TempF.length;i++){
    ConvertFahrenheitToCelsius(TempF[i])
  
}



