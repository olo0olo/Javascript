// функция   аналог search(str0,str1) - возвращает позицию первого
// совпадения с str1 в строке str0 или -1, если совпадения нет.

function myIndexOf(arr = [], elem = 0 ) {
    console.log (elem);
  for (let i = 0 ; i <= arr.length ; i++) if (arr[i] == elem) return i;
    
     return -1;

         }

        const arr = ['1',4,7,'qw',56]
         console.log (myIndexOf (arr, 7));
 

