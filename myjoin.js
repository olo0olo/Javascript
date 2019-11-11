// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

function myjoin( my_arr =[] , sep = '') {
  let answ = '';
  let i=0;
  while (i <= my_arr.length - 1) {
      answ += my_arr[i] + sep;
      i++;
  }
  if (answ.length >0) answ = answ.substring(0, answ.length - 1);
  return answ;
}

const arr1 = [6,5,7,67,'sad'];

console.log (arr1 + ' = ' + myjoin(arr1, ''));
console.log (arr1 + ' = ' + myjoin(arr1, '/'));