const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// let temp=INT_MIN;
let temp = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > temp) {
        temp = numbers[i];
    }
}
console.log(temp);