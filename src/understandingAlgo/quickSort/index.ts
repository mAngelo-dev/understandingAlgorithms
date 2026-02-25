function quickSort(arr: Array<number>): Array<number> {
    if (arr.length <= 1) return arr;
    else {
        const pivot = arr[0];
        const left = () => {
            let leftArray = []
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] <= pivot) {
                    leftArray.push(arr[i])
                }
            }
            return leftArray;
        }
        const right = () => {
            let rightArr = []
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > pivot) {
                    rightArr.push(arr[i])
                }
            }
            return rightArr;
        }
        return [...quickSort(left()), pivot, ...quickSort(right())]
    }

}

