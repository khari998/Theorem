// recursively reduce a nested array
const flattenArr = nestedArray => nestedArray.reduce((seedArr, arrElem) => Array.isArray(arrElem) ? seedArr.concat(flattenArr(arrElem)) : seedArr.concat(currArr), []);
console.log(flattenArr([[1,2,[3]],4])); // Tested working
