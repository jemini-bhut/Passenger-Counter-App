let count = 0;
let saveE1 = document.getElementById("save-el");
let countE1 = document.getElementById("count-el");

// Function to count number of people entering 
function increment() {
    count += 1;
    countE1.textContent = count;
}

// Function to show and display last number of entries
function save() {
    let countStr = count + " - ";
    saveE1.textContentStr;
    document.getElementById("save-el").innerHTML = count;
    countE1.textContent = 0;
    count = 0;
}

console.log("Let's count people on the station.");
