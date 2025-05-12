// function removeFalsyValues(arr) {
//   return arr.filter(Boolean);
// }



function removeFalsyValues(arr) {
    const answer = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            answer[answer.length] = arr[i]; 
        }
    }
    return answer;
}

console.log(removeFalsyValues([0, 5, false, 6, '', 7]));

console.log(removeFalsyValues([1, 0, false, 2, "", 3, undefined, 4, null, 5])); // [1, 2, 3, 4, 5]
console.log(removeFalsyValues([0, "", null, undefined, NaN])); // []
console.log(removeFalsyValues([true, false, 1, 2, 3])); // [true, 1, 2, 3]
console.log(removeFalsyValues([false, 0, "", null, undefined])); // []
console.log(removeFalsyValues([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
