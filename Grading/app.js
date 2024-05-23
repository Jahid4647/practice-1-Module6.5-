let mark = prompt("Type your mark:");

if (mark >= 90 && mark <= 100) {
    console.log("You Got A+");
}
else if (mark >= 80 && mark <= 89) {
    console.log("You Got A");
}
else if (mark >= 75 && mark <= 79) {
    console.log("You Got A-");
}
else if (mark >= 60 && mark <= 74) {
    console.log("You Got B");
}
else if (mark >= 50 && mark <= 59) {
    console.log("You Got C");
}
else if (mark >= 40 && mark <= 49) {
    console.log("You Got D");
} else if (mark < 40) {
    console.log("youre Fail");
}
else {
    console.log("Invalid Input");
}