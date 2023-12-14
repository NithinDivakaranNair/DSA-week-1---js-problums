function Countvowel(str){
    str=str.toLowerCase();
    let vowelcount=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            vowelcount++
        }

    }
  return vowelcount  
}

console.log(Countvowel('maLa'));
