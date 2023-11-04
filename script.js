var Request=new XMLHttpRequest();
Request.open("GET","https://restcountries.com/v3.1/all",true); //opening a connection to server
Request.send()                                                 //sending the request 
Request.onload=function(){                                     //getting response by funvtion
    var Data=Request.response;
    var result=JSON.parse(Data)

//a.)Get all the countries from Asia continent /region using Filter function
const AsianCountry=result.filter((y)=>y.region==="Asia")
const output=AsianCountry.map((x)=>console.log(x.name.common))

//b.)Get all the countries with a population of less than 2 lakhs using Filter function
const Population=result.filter((n)=>n.population<200000)
const value=Population.map((m)=>console.log(`Population lessthan 2lakhs cuntries "${m.name.common}"`))

//c.)Print the following details name, capital, flag, using forEach function
const Names=result.forEach((p)=> {
    console.log(`Name of the country "${p.name.common}" 
Capital of the country "${p.capital}" 
Flag for the country "${p.flags.png}"`)
});
//d.)Print the total population of countries using reduce function

const Total=result.reduce((acc,cv)=>{
    return acc+cv.population
},0)
console.log(Total)

//e.)Print the country that uses US dollars as currency.
const uscurrency=result.filter((d)=>(d.currencies && d.currencies.USD))
const res=uscurrency.map((u)=>console.log(u.name.common))



    


}
