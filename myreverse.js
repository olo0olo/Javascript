/*Метод reverse() на месте обращает порядок следования элементов массива.
 Первый элемент массива становится последним, а последний — первым.*/
 function myreverse (my_arr = []) {
const arr1 = [];
for (let i = my_arr.length  ; i != 0; i--) arr1[my_arr.length - i] = my_arr [i-1];
return arr1;
 }



const arr1 = [6,5,7,67,'sad',55,'werwer'];
const arr2 = [6,'wtttt',7,67,'sad',55,'wr'];
const arr3 = ['sdasdd',7,67,'sad',55,'werwer'];

console.log (arr1 + ' = ' + myreverse(arr1));
console.log (arr2 + ' = ' + myreverse(arr2));
console.log (arr3 + ' = ' + myreverse(arr3));