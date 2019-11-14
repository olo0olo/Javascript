/*3.  Mark
Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты: 

поле, которое хранит цвет маркера; 
поле, которое хранит количество чернил в маркере (в процентах); 
метод для печати (метод принимает строку и выводит текст соответствующим цветом;
     текст выводится до тех пор,
     пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере). 
Реализовать класс, описывающий заправляющийся маркер, 
унаследовав его от простого маркера и добавив метод для заправки маркера. 
Продемонстрировать работу написанных методов. */

class marker {
    constructor (color = '', cher = 0){
      this.color = color;
      this.cher = cher;
    }

   print(str = ''){ 
       let strM ='';
       let len = Math.floor(this.cher / 2);     
     if (len < str.length ) {
       for (let i = 0; i < len; i++){
        strM += str[i];
       if (str[i] == ' ')  {len++;}
    
       }
     } else {strM = str}   
    return strM;
    }
}

class mark extends marker {
    
    refill (num = 0){
        let cher = this.cher + num;
        
      return cher > 100 ? this.cher = 100: this.cher = cher;
    }

}

const mar = new marker('blue', 27);
const newMark = new mark('red', 15);

console.log(mar);
console.log(mar.color, mar.print('Чернила заканчиваются очень быстро!'));
console.log('было', newMark);
newMark.refill(30);
console.log('заправили', newMark);


console.log(newMark.color, newMark.print('Чернила заканчиваются очень быстро!'));