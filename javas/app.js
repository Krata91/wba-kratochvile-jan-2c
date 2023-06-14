
//Sčítání

var x = 5;
var y = 5;

console.log(x+y);


//Jméno

function fullName(firstName, lastName) {
    console.log("Celé jméno: " + firstName + " " + lastName);
}

var name = fullName("Jan", "Kratochvíle");

//is greater

function isGtTwo(value) {
    if (value > 2) {
        return true;
    }
    
    else {
        return false;
    }
}


console.log(isGtTwo(4));

if (isGtTwo > 2) {
    console.log("Hodnota je vetší než 2")
}

else if (isGtTwo < 2) {
    console.log("Hodnota je menší než 2")
}