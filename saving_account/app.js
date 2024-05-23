function monthlySvaings(array, cost) {
    let totalIncome = 0;

    if (Array.isArray(array) && typeof cost == "number") {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 3000) {
                totalIncome += array[i] * 0.8;
            } else {
                totalIncome += array[i];
            }
        }
        totalIncome -= cost;
        if (totalIncome >= 0) {
            return totalIncome;
        } else {
            return "earn more";
        }
    } else return "invalid input";
}

const incomes = [1000, 2000, 2500];
let cost = 5000;
console.log(monthlySvaings(incomes, cost));