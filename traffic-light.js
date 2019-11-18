
let count = 1;

function illuminate(num = 0) {
  clearLights();
  
  switch (num) {
  case 1 : document.getElementById('stopLight').style.backgroundColor = "red";
            count = 2; break;
  case 2 : document.getElementById('slowLight').style.backgroundColor = "yellow";
            count = 3; break;
  case 3 : document.getElementById('goLight').style.backgroundColor = "green";
            count = 1; break;


  }
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}