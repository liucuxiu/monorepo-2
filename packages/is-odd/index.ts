import { isEven } from 'is-even';

export const isOdd = (x: number) => !isEven(x);
console.log(isOdd(2));
console.log(isOdd(3));