/*

function isTrue(boolean) {
    return boolean === true;
}

console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(null));
console.log(isTrue("true"));
console.log(isTrue("Banana"));
console.log(isTrue([1, 2]));

function isFalse(boolean){
    return boolean === false;
}

console.log(isFalse(true));
console.log(isFalse(false));
console.log(isFalse(0));
console.log(isFalse(null));
console.log(isFalse("true"));
console.log(isFalse("Banana"));
console.log(isFalse([1, 2]));*/

/*
function not(param){
    return !param
}

console.log(not(false));                 // true
console.log(not(0));                   // true
console.log(not(""));                    // true
console.log(not(null));                   // true
console.log(not(NaN));                // true
console.log(not(undefined));            // true
console.log(not(true));                 // false
console.log(not("something"));         // false
console.log(not(Infinity));           // false
console.log(not(123));*/


/*
function addOne(num){
    return parseFloat(num) + 1;
}

console.log(addOne(0));
console.log(addOne(2));   // 3
console.log(addOne(-5));                   // -4
console.log(addOne(5.789));                // 6.789
console.log(addOne(Infinity));             // Infinity
console.log(addOne("2"));                  // 3
console.log(addOne("0"));                  // 1
console.log(addOne("banana"));             // NaN
console.log(addOne(true));                 // NaN
console.log(addOne(NaN));*/

/*function isEven(num){
   return typeof num % typeof 2 === 0;
}

console.log(isEven(2));                   // true
console.log(isEven(-8));                  // true
console.log(isEven(0));                   // true
console.log(isEven("42"));                // true
console.log(isEven(1));                   // false
console.log(isEven("-3"));                // false
console.log(isEven(false));               // false
console.log(isEven("banana"));            // false*/

/*
function isIdentical(arg_one, arg_two){
    return arg_one === arg_two;

}

console.log(isIdentical(3, 3));                     // true
console.log(isIdentical(false, false));             // true
console.log(isIdentical("hello", "hello"));         // true
console.log(isIdentical(3, 3.0));                   // true
console.log(isIdentical(undefined, undefined));     // true
console.log(isIdentical(2, "2"));                   // false
console.log(isIdentical("javascript", "java"));     // false*/

/*function isEqual(arg_one, arg_two){
    return arg_one == arg_two;

}

console.log(isEqual(3, "3"));                       // true
console.log(isEqual("abc123", "abc123"));           // true
console.log(isEqual(true, 1));                      // true
console.log(isEqual(0, false));                     // true
console.log(isEqual(4, -5));                        // false
console.log(isEqual("java", "javascript"));         // false*/

/*function or(arg_one, arg_two){
    return arg_one || arg_two;
}

console.log(or(true, true));                    // true
console.log(or(true, false));                   // true
console.log(or(false, true));                   // true
console.log(or(false, false));                  // false
console.log(or("hello", "world"));              // "hello" (this behavior is non-obvious, research more!)*/

/*function and(arg_one, arg_two){
    return arg_one && arg_two;

}

console.log(and(true, true));                    // true
console.log(and(true, false));                   // false
console.log(and(false, true));                   // false
console.log(and(false, false));                  // false
console.log(and("hello", "world"));   */           // "world" (this behavior is non-obvious, research more

/*
function concat(arg_one, arg_two){
    return ("" + arg_one + arg_two);
}

console.log(concat("code", "up"));                // "codeup"
console.log(concat("connect", 4));                // "connect4"
console.log(concat("hello", "world"));            // "helloworld"
console.log(concat(4, 2));                        // "42"
console.log(concat(true, true));                  // "truetrue"*/
