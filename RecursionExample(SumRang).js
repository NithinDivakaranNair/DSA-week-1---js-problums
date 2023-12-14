function sumrang(num){
    if(num==1){
return 1;
    }
return num+sumrang(num-1)
}
console.log(sumrang(5))