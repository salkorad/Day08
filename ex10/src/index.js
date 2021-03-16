// Only change code below this line
function mathTest(x, y) {
    // Only change code above this line
        if (x < 0 || y < 0) {
        // Only change code below this line
        return undefined;
        // Only change code above this line
        }
    
        return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
        
    }
    
<<<<<<< HEAD
    console.log(mathTest(2,2));
    console.log(mathTest(2,2));
    console.log(mathTest(-2,2));
    console.log(mathTest(-2,2));
    console.log(mathTest(2,8));
    console.log(mathTest(3,3));
    console.log(mathTest(0,0));
    
    module.exports = mathTest;
=======
}

console.log(mathTest(2,2));
console.log(mathTest(2,2));
console.log(mathTest(-2,2));
console.log(mathTest(-2,2));
console.log(mathTest(2,8));
console.log(mathTest(3,3));
console.log(mathTest(0,0));

module.exports = mathTest;
>>>>>>> 165f61d0b277ff08cce77c228b61006d68eb9a56
