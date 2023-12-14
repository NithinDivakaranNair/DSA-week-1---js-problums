function CheckPalindrome(str){
  var str1=''
  for(i=str.length-1;i>=0;i--){
    str1+=str[i]
  }
  return str1
}
console.log(CheckPalindrome("helo"));

