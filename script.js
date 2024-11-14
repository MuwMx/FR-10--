const fruits = [
   "fruits/яблуко.png",
	"fruits/груша.png",
	"fruits/лимон.png",
	"fruits/вишня.png",
	"fruits/абрикос.png"
];

let currentRound = 1;
let userWin = false;

document.getElementById("userName").textContent = prompt("Введіть своє ім'я") || "User";

function getRandomFruits() {
    let columnItems = [];
    for (let i = 0; i < 3; i++) {
        let shuffledFruits = fruits.sort(() => 0.5 - Math.random());
        columnItems.push(shuffledFruits[i]);
    }
    return columnItems;
}

function playGame() {
    if (currentRound > 3) {
        document.getElementById("resultMessage").textContent = userWin ? "Вітаємо! Ви перемогли!" : "Спроби закінчилися. Ви програли.";
        return;
    }
    
    let column1 = getRandomFruits();
    let column2 = getRandomFruits();
    let column3 = getRandomFruits();
    
    document.getElementById("item1-1").innerHTML = `<img src="${column1[0]}" alt="fruit" class="fruit-image">`;
    document.getElementById("item1-2").innerHTML = `<img src="${column1[1]}" alt="fruit" class="fruit-image">`;
    document.getElementById("item1-3").innerHTML = `<img src="${column1[2]}" alt="fruit" class="fruit-image">`;
    
    document.getElementById("item2-1").innerHTML = `<img src="${column2[0]}" alt="fruit" class="fruit-image">`;
    document.getElementById("item2-2").innerHTML = `<img src="${column2[1]}" alt="fruit" class="fruit-image">`;
    document.getElementById("item2-3").innerHTML = `<img src="${column2[2]}" alt="fruit" class="fruit-image">`;
    
    document.getElementById("item3-1").innerHTML = `<img src="${column3[0]}" alt="fruit" class="fruit-image">`;
    document.getElementById("item3-2").innerHTML = `<img src="${column3[1]}" alt="fruit" class="fruit-image">`;
    document.getElementById("item3-3").innerHTML = `<img src="${column3[2]}" alt="fruit" class="fruit-image">`;
    
    if (column1[0] === column2[0] && column2[0] === column3[0] ||
        column1[1] === column2[1] && column2[1] === column3[1] ||
        column1[2] === column2[2] && column2[2] === column3[2]) {
        userWin = true;
    }
    
    document.getElementById("currentRound").textContent = currentRound;
    currentRound++;
    
    if (currentRound > 3) {
        document.getElementById("resultMessage").textContent = userWin ? "Вітаємо! Ви перемогли!" : "Спроби закінчилися. Ви програли.";
    }
}
