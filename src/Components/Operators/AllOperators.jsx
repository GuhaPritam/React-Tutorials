/*
-------------- Example of And (&&) Operator ------------------

-- It will go 1st expretion and check the value is true or false if true then it 
    will go next expretion or If it false it will stay in 1st expretion only.

-- const result1 = name && "JavaScript"( true && print the value ) or ( false && print false )

-- When the condition give === true:
    1. string ("string") === true
    2. false === true
    3. empty string (" ") === default string or empty value

*/

export default function AndExample() {
  const name = "Pritam Guha";
  //   if (name) {
  //     console.log("Not empty");
  //   } else {
  //     console.log(" ");
  //   }
  const result1 = name && "JavaScript";
  console.log(result1); // JavaScript
}
