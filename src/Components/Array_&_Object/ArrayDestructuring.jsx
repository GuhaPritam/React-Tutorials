// // Basic Array Destructuring:
const arr_1 = [1, 2, 3];
const [first_1, second_1, third_1] = arr_1
console.log('Basic Array Destructuring:', first_1, second_1, third_1)

// // Skipping Elements:
const arr_2 = [1, 2, 3, 4, 5];
const [first_2, , third_2, , fifth_2] = arr_2;
console.log('Skipping Elements:', first_2, third_2, fifth_2); 

// Rest Syntax:
const arr_3 = [1, 2, 3, 4, 5];
// const first = arr[0];
// const rest = [];
// for (let i=1; i<arr.length; i++){
//     rest.push(arr[i])
// }
const [first_number, ...rest] = arr_3;
console.log('Rest Syntax:', first_number, rest);

// Swapping Values:
let a = 1, b = 2, c = 10;
[a, c] = [c, a];
console.log('Swapping Values:', a, b, c);

// Function Return:
function getValues() {
    return [1, 2, 3];
}
const [first, second, third] = getValues()
console.log('Function Return:', first, second, third)

// Object Destructuring Inside Array Destructuring:
const arr = [{ name: 'Pritam' }, { name: 'Guha' }, {age: 26}];
const [{ name: firstName }, { name: lastName }, {age: myAge}] = arr;
console.log(firstName, lastName, myAge); 
