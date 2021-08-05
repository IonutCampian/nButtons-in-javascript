var addButtons = document.getElementById('addButtons');
var number = prompt('enter a number');
var btn = Array();
function getRandomInt(max) {
return Math.floor(Math.random() * max);
 }
var randomNumber = getRandomInt(3);
for( var i = 0; i < number; ++i){
    var btnNew = document.createElement('BUTTON');
    btnNew.innerText = i;
    btnNew.setAttribute("id", i)
    addButtons.appendChild(btnNew);
    btnNew.addEventListener('click',  function() {
        if(this.id == randomNumber){
         document.write('winner');
           
        }
        else{
            alert("try again!");
        }
    btn[i] = document.getElementById(i).value;
    });
}  
