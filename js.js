let num = 1875;
let temp=num;
let newnum =0;
while(temp>0){
 let digit = temp%10;
 newnum =newnum*10+digit;
 num=  Math.trunc(num/10);

}
console.log(newnum);
console.log(num);
      