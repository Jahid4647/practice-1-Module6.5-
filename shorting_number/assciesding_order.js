const array = [3, 19, 26, 32, 35, 44, 21, 37, 88, 14, 39, 57, 8, 53, 51];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}