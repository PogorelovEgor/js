let age;
let isWork;
let money;
const prise = 2000;
age = Number(prompt("Сколько вам лет"));
isWork = prompt("Вы работаете?").toLowerCase() == "да";
money = Number(prompt("Сколько вы денег имеете"));
function buyMacBook(age, isWork, money){
    if (age > 24 && isWork){
        money += 500;
    }
    else if(age > 24){
        money += 100;
    }
    if (money >= prise){
        return true;
    }
    else {
        return false;    
    }
}
if (buyMacBook(age, isWork, money)){
    console.log("Вы можите купить MacBook");
}
else {
    console.log("У вас нехватает средств");
}