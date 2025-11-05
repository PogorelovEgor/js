let res = prompt("Сколько будет 7+ или - 15?");
switch(res){
    case "Я не робот":
    case "Много": {
        console.log("Вы не робот!");
        break;
    }
    default:{
        console.log("Вы робот!");
    }
}