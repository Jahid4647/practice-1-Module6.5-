const year = prompt("Type Year For Check 'Is Leap Year Or Not'");

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is Leap year`);
} else {
    console.log(`${year} is not a Leap year`);
}