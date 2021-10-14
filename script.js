let arr1 = [1,2,3,4,5,6]

function copyList(arr, func) {
    return arr.map(el => (typeof func === 'function' ? func(el) : el));
  }

console.log(copyList(arr1));