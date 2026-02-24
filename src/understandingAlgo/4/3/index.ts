function findBiggestNumberInArray(arr: Array<number>): number {
    if (arr.length === 0) return 0;
    const max = arr[0];
    return max > findBiggestNumberInArray(arr.slice(1)) ? max : findBiggestNumberInArray(arr.slice(1));
}