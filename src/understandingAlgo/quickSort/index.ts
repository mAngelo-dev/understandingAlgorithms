function quickSort(arr: Array<number>): Array<number> {
    if (arr.length <= 1) return arr;
    else {
        // If you use the first element as a pivot, the bigO notation will be O(n^2), using the middle element as a pivot will be O(n log n)
        const pivot = arr[Math.floor(arr.length / 2)];
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

