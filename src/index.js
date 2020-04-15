// import { user, keyValue as key, test } from "./transformation.js";
// import a from "./transformation.js";

// document.body.innerHTML = user; // John

// console.log(key);
// console.log(user);
// test();

// console.log(a);

//import everything
import * as imported from "./transformation.js";

console.log(imported);
console.log(imported.keyValue);
console.log(imported.user);
console.log(imported.default);
