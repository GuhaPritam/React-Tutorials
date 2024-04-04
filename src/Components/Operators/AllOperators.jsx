/*
-------------- Example of And ( && ) Operator ------------------

-- It will go 1st expression and check the value If it's defined or the value is give true then it 
    will go next expression or If it false, null or undefined it will print false, null or undefined.

-- const result1 = name && "JavaScript"( true && print the 2nd value ) or ( false && print false )

-- When the condition give === true:
    1. string ("string") === true
    2. false === false
    3. empty string (" ") === default string or empty value

*/

export default function AndExample() {
  const name = "Pritam Guha";
  //   if (name) {
  //     console.log("JavaScript");
  //   } else {
  //     console.log(name);
  //   }
  const result1 = name && "JavaScript";
  console.log(result1); // JavaScript
}


/*
-------------- Example of Or ( || ) Operator ------------------

-- It will check the 1st expression. If it's defined or the value is give true then, it will return the value of the 1st expression. 
    If the 1st expression is false, null or undefined then it will go to the 2nd expression and print.

-- const result2 = fruit || "Cut the fruit"( true || print the 1st value ) or ( false || print the 2nd value )

-- When the condition give === true:
    1. string ("string") === true
    2. false, null, undefined === 'Cut the fruit'
    3. empty string (" ") === default string or empty value

*/

export default function OrExample() {
  const fruit = "Apple";
  // if (fruit) {
  //   result2 = fruit;
  // } else {
  //   result2 = "Cut the fruit";
  // }
  const result2 = fruit || "Cut the fruit";
  console.log(result2); // Apple
}


/*
-------------- Example of Nullish Coalescing ( ?? ) Operator ------------------

-- It will check the 1st expression. If it's defined or the value is give true then, it will print the value of the 1st expression.
   If it is null or undefined, it will print the second expression or if the value is false then it will print false.

-- const result3 = place ?? "No we are not going"( true ?? print the 1st value ) or ( false ?? print the false )

-- When the condition give === true:
    1. string ("string") === true
    2. false === false
    3. empty string (" ") === default string or empty value
    4. null or undefined === "No we are not going"

*/

export default function NullishExample() {
  const place = "Kashmir";
  // if (place !== null && place !== undefined) {
  //   result3 = place;
  // } else {
  //   result3 = "No we are not going";
  // }
  const result3 = place ?? "No we are not going";
  console.log(result3); // Kashmir
}
