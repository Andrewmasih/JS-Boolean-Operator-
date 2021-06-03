/* (!) makes the output ineffective, TRUE and TRUE is TRUE, but (!) operator negates it so the result is FALSE */

console.log(! false);
console.log(! true);
console.log(! (10>5) && (5>1));

