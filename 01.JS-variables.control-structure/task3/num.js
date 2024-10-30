let a = +prompt("ədədi daxil edin");
let count =0;
for (let i =0; i <=a; i++) {
    if(a % i ===0){
        count++
    }  
}console.log(count);