let balance = 999;
let bonus = 10;
let isBaned = false;
let isPaymentGames = true;
let isByeGames = false; 
if (!isBaned){
    if (isPaymentGames){
        if (!isByeGames){
            if (balance > 1000 || bonus > 100){
                console.log("Игра может быть куплена");
            }
            else {
                console.log("Нехватает средств");
            }
        }
        else{
            console.log("Игра уже куплина");
        }
    }
    else {
        console.log("Игра не доступна в вашеме регионе");
    }
}
else {
    console.log("Вы заблокированы");
}