import clone from "../utils/copy/clone";
const arr = [1,3,2];
const copyArr = clone(arr);

console.log(arr, copyArr, copyArr === arr);