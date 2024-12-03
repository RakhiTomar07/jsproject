let = year
let= checkyear =(year)=>{
    else{
        console.log("${year} isn't a leep year");
    }
    if(year% 4== 0 && year%100 !=0)console.log('${year} is a leep year');
    else if(year%4 ==0 && year%100 == 0 && year%400 == 0)console.log('${year} is a leep year');
    else console.log('${year} is not a leep year');
}
checkyear(year);