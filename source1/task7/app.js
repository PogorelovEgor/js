function canAccessWebsite(age){
    if (age >= 18){
        return true;
    }
    else {
        return false;
    }
}
let age = prompt("Введите свой возрост!");
console.log(`Вы ${canAccessWebsite(age) ? "можите пройти на сайт" : "не можите зайти на сайт так как вы не достигли 18 лет"}`);