/* str.split([separator[, limit]])
 Метод split() возвращает новый массив.

Если разделитель separator найден, он удаляется из строки, а подстроки возвращаются в массиве. 
Если разделитель опущен, массив будет содержать только один элемент, состоящий из всей строки. 
Если разделитель является пустой строкой, строка str будет преобразована в массив символов.

Если разделитель является регулярным выражением, содержащим подгруппы, 
то каждый раз при сопоставлении с разделителем, результаты (включая те, что не определены) 
захвата подгруппы будут помещаться внутрь выходного массива. 
Однако, не все браузеры поддерживают эту возможность.
*/

function mySplit (str = '', sep =''){
  const arr =[];
  let lastPos =0;
  
    for (let i = 0; i <= str.length; i++){
        console.log (str[i]);
        if (str[i] === sep) {
        console.log (i);
        arr.push (str.substring(lastPos, i));
        lastPos = ++i;
      }

    }


  return arr;

}

let String = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';

console.log (mySplit(String,','));

