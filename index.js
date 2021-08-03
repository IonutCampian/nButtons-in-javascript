var adaugaButoate = document.getElementById('adaugaButoate');
var number = prompt('enter a number');
var btn = Array();
function getRandomInt(max) {
return Math.floor(Math.random() * max);
 }
var numar = getRandomInt(3);
for( var i = 0; i < number; ++i){
    var btnNou = document.createElement('BUTTON');
     btnNou.innerText = i;
     btnNou.setAttribute("id", i)
      adaugaButoate.appendChild(btnNou);
        btnNou.addEventListener('click',  function() {
        if(this.id == numar){
          btnNou.style.color = "red";
         // document.write("winner");
           
        }
        else{
            alert("try again!");
        }
        btn[i] = document.getElementById(i).value;
    });
}  