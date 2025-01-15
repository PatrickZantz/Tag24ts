import { add, subtract, multiply, divide } from './operations';
import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from './operations2';

console.log('Addition:', add(10, 5));
console.log('Subtraction:', subtract(10, 5));
console.log('Multiplication:', multiply(10, 5));
console.log('Division:', divide(10, 5));

console.log('Addition with new names:', addNumbers(20, 10));
console.log('Subtraction with new names:', subtractNumbers(20, 10));
console.log('Multiplication with new names:', multiplyNumbers(20, 10));
console.log('Division with new names:', divideNumbers(20, 10));
