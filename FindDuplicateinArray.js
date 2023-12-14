function search(arr, val) {

    var arr1 = []
    for (let i = 0; i < arr.length; i++) {
        let flage = 0
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                flage = 1
                break;
            }
        }
        if (flage == 1) {
            arr1.push(arr[i])
        }

       
    }
    return arr1
}
console.log(search([3, 4, 5, 6, 7, 5]))