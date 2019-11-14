/*4.  Figure
Реализовать класс, описывающий геометрическую фигуру со свойствами и методами: 

get-свойство для получения названия фигуры; 
метод для вывода информации о фигуре (стороны и их длина); 
метод для вычисления площади фигуры; 
метод для вычисления периметра фигуры. 
Реализуйте классы-наследники: квадрат, прямоугольник и треугольник.
 Переопределите методы вывода и вычислений в классах-наследниках. Создайте
 массив с различными фигурами и выведите информацию о каждой фигуре, 
 включая площадь и периметр.*/

class Figure {
  constructor (str, num = 1, len = 1 ){ 
        this.name = str;
        this.num = num;
        this.len = len;

     }

     get figname() {return this.name};

     info(){return 'кол сторон= ' + this.num +' длина стороны= ' + this.len};
     
     perim(){return 'Периметр = ' + this.num*this.len};
 }

 /*class triangle {
    constructor ( num = 1, len = 1 ){        
        this.num = num;
        this.len = len;
     }

 }
*/
class triangle extends Figure {
    triangleArea() {//Площадь треугольника, формула Герона.
       
        let p = 0.5 * this.len * 3;
        let sq = (p * 3 * (p - this.len)) ** 0.5;
        return 'Площадь = ' + Math.floor(sq)};
 }

class rectangle extends Figure {
    rectangleArea() {return '4. Периметр = ' + this.num*this.len};
 }



 const kv = new Figure('квадрат',4,4);
 let tr = new triangle('треугольник',3,7);
 let rc = new rectangle('прямоугольник',4,9);

 const arr = [kv, tr, rc];

 console.log(kv.figname, kv.perim());
 console.log(tr.triangleArea());
 console.log(tr.perim());
 console.log(arr);



 
 

 


