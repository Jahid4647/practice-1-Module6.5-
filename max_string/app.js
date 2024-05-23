let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let temp = 0;
let str;
for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > temp) {
        str = friends[i];
    }
}
console.log(str);