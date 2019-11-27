
let numb1 = '',
    numb2 = '',
    flag = true,
    meth = '',
    rez = '',
    rezD = '';

function btnclick( cas = ''){
  
  let upDoc = document.querySelector('#working');
  let downDoc = document.querySelector('#workingForm');
 // console.log(cas);

  
  
    switch (cas){    

     
      case '1' : numb2 += cas; rez += cas; rezD += cas; break;
      case '2' : numb2 += cas; rez += cas; rezD += cas; break;
      case '3' : numb2 += cas; rez += cas; rezD += cas; break;
      case '4' : numb2 += cas; rez += cas; rezD += cas; break;
      case '5' : numb2 += cas; rez += cas; rezD += cas; break;
      case '6' : numb2 += cas; rez += cas; rezD += cas; break;
      case '7' : numb2 += cas; rez += cas; rezD += cas; break;
      case '8' : numb2 += cas; rez += cas; rezD += cas; break;
      case '9' : numb2 += cas; rez += cas; rezD += cas; break;
      case '0' : numb2 += cas; rez += cas; rezD += cas; break;
      case '.' : numb2 += cas; rez += cas; rezD += cas; break;
      case '00' : numb2 += cas; rez += cas; rezD += cas; break;


      case 'c' : numb2 = ''; numb1 = '';  meth = ''; rez = ''; rezD = '';
                 return downDoc.innerHTML = upDoc.innerHTML = '0'; break;
     
      
      
      case '=' : console.log('==',Number(numb1),Number(numb2),meth);

               if  (numb2 != '' && numb1 != '') {rez = method(Number(numb1),Number(numb2),meth).toString()} ;
               console.log(rezD);
               rezD += '=' + rez; console.log(rezD);
                meth = ''; numb2 = rez;
                return upDoc.innerHTML = rez,
                downDoc.innerHTML = rezD, rezD = rez;
                break;
     
     
      case '!' : 
      
      
       break;
    }


      if (meth == '') {
      

        switch (cas){ 
        case '+' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas; break;
        case '-' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas; break;
        case '*' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas; break;
        case '/' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas; break;
        case '^' : numb1 = numb2; numb2 = ''; meth = cas; rezD += cas; rez += cas; break;

        }
      }
        
      

    

    upDoc.innerHTML = rez;
    downDoc.innerHTML = rezD;
}

function method(a = 0,b = 0, meth1 = '+'){
 
  

  switch (meth1){
    case '+' :  return a + b ; break;
    case '-' :  return a - b ; break;
    case '*' :  return a * b ; break;
    case '/' :  return a / b ; break;
    case '^':   return Math.pow(a,b) ; break;
  }


}

