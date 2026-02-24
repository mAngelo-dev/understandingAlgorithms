function countElementsInArray(arr: Array<number>): number {
    if (arr.length === 0) return 0;
    return 1 + countElementsInArray(arr.slice(1))
}