// Name: Steven Chan

//Function Description: map calls a provided callback function once for each element in an array,
// in order, and constructs a new array from the results. callback is invoked only for indexes of
// the array which have assigned values (including undefined).

//callback function accepts the following arguments: currentValue, index, arr

Array.prototype.myMap = function(callback) {
    
    let arr = []; //the new array being returned with same length as array parameter
    
    for(let i = 0; i < this.length; i++){
        arr.push(callback(this[i],i,this));
    }
    return arr;
};

// Testing #1
let numbers = [1, 4, 9, 16];

const testMap = numbers.myMap(x => x * 2);
console.log(testMap);

// Testing #2
let numbers2 = [1, 4, 9]
let roots = numbers2.myMap(function(num) {
    return Math.sqrt(num)
})
console.log(roots);
console.log(numbers2);