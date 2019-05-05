// recursively reduce a nested array
const flattenArr = nestedArray => nestedArray.reduce((prevArr, currArr) => Array.isArray(currArr) ? prevArr.concat(flattenArr(currArr)) : prevArr.concat(currArr), []);
console.log(flattenArr([[1,2,[3]],4])); // Tested working
