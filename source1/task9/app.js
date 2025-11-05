const tasks = ['Задача 1', "Задача 2"];

function addItemArray(array, item){
    array.push(item);
}

function removeItemArray(array, item){
    let index = array.indexOf(item);
    if (index === -1){
        return;
    }
    return array.splice(index, 1)[0];
}

function prioritizeItemArray(array=Array, item=String){
    const result = removeItemArray(array, item);
    if (result){
        array.unshift(result);
    }
}
console.log(tasks);
addItemArray(tasks, "Задача 3");
addItemArray(tasks, "Задача 4");
addItemArray(tasks, "Задача 5");
console.log(tasks)
removeItemArray(tasks, "Задача 2");
console.log(tasks);
prioritizeItemArray(tasks, "Задача 4");
console.log(tasks);