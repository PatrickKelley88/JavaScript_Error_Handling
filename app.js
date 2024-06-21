// TODO: Enable strict mode
"use strict";
// TODO: Fix the following parameter list
function parseToJSON(data) {
  // TODO: Add a try/catch block to
  // attempt to convert 'data' to JSON

  // TODO: if an exception is raised
  // print the error to the console
  // and return null
  try{
    return JSON.parse(data); 
  } catch(err) {
    console.error(err);
    return null;
  }
}

let failData = "Hello World!"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
