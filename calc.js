
let numb1 = '',
    numb2 = '',
    flag = true,
    meth = '',
    rez = '',
    rezD = '',
    Mr = '';

const  upDoc = document.querySelector('#working'),
       downDoc = document.querySelector('#workingForm');

function btnclick( cas = ''){
  
 
    switch (cas){          
      case '1' : 
      case '2' : 
      case '3' : 
      case '4' : 
      case '5' : 
      case '6' : 
      case '7' : 
      case '8' : 
      case '9' : 
      case '0' : 
      case '00' : if (numb2.length < 8) {numb2 += cas; 
                   rez += cas; 
                   rezD += cas;
                    }
                   break;
      
      case '.' : if (flag == true ) {numb2 += cas; rez += cas; rezD += cas; flag = false;} break;
    
      case '!' : console.log(numb2.length, numb2);
                 console.log(numb2.substring(numb2.lenght -1));
                 numb2 = numb2.substring(0, numb2.lenght - 1);
                 console.log(numb2);
       rez = numb2;
       rezD = rez;
       downDoc.innerHTML = '0';
       upDoc.innerHTML = '0';
       
      return '0';

      case 'c' : {Mr = '';
        numb2 = '';
        numb1 = '';  
        meth = ''; 
        rez = ''; 
        rezD = '';
        downDoc.innerHTML = '0';
        upDoc.innerHTML = '0';
      }
      return '0'; 
      
      case 'Mr' :{ 
                  numb2 = '';
                  numb1 = '';  
                  meth = ''; 
                  rez = Mr;
                  rezD = Mr;
                  downDoc.innerHTML = rez;
                  upDoc.innerHTML = rezD;
                  
                  return '0'; 
    }
      case 'M+' : { Mr = (Number(numb2) + Number(Mr)).toString();} ;break;
      case 'M-' : { Mr = ( Number(Mr) - Number(numb2)).toString()} ;break;
      case 'Mc' : {Mr = ''};break;

      

      
      case '=' : 

        if  (numb2 != '' && numb1 != '') {rez = method(Number(numb1),Number(numb2),meth).toString()} ;
              
                 rezD += '=' + rez; 
                 meth = ''; 
                 numb2 = rez;
                 flag = true;
                 upDoc.innerHTML = rez;
                 downDoc.innerHTML = rezD;
                 rezD = rez;
                return '0';
                break;
     
     
      case '!' : //console.log(numb2.length, numb2);
            let d = numb2.lenght -1;
      numb2 = nubm2.substring( 1, d);
                console.log(numb2.substring( 1, numb2.lenght - 1));         
                 rez = numb2;
                 rezD = rez;
                 upDoc.innerHTML = rez;
                 downDoc.innerHTML = rezD;
                 
                return '0';
      
               
    }


      if (meth == '') {
        switch (cas){ 
           case '+' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas;  flag = true; break;
           case '-' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas;  flag = true; break;
           case '*' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas;  flag = true; break;
           case '/' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas;  flag = true; break;
           case '^' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas;  flag = true; break;

        }
      }
        
    upDoc.innerHTML = rez;
    downDoc.innerHTML = rezD;
}

function method(a = 0,b = 0, meth1 = '+'){
 
  let answ = '';

  switch (meth1){
   
    case '+' :  answ = a + b ; break;
    case '-' :  answ = a - b ; break;
    case '*' :  answ =  a * b ; break;
    case '/' :  answ =  a / b ; break;
    case '^':   answ =  Math.pow(a,b) ; break;
  }
   return answ;

}

