function add(params) {
    let total=0;
    for (let i=0;i<=params;i++){
        total+=i;

    }
    return total;
}
// console.log(add(5))
let t1=performance.now();
add(1000);
let t2=performance.now();
console.log(`time taken :${(t2-t1)/1000} seconds.`)