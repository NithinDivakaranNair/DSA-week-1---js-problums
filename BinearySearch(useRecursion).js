function binerayseach(arr,target,low,high){
    if(low>high){
        return -1;
    }
var mid=(low+high)//2
if(arr[mid]==target){
    return mid;
    }else if(arr[mid]<target){
       return binerayseach(arr,target,mid+1,high)   
    }else{
        return binerayseach(arr,target,low,mid-1) 
    }

}
const arr=[3,5,6,7]
const target=6;
console.log( binerayseach(arr,target,0,arr.length-1))
