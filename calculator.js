let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'history') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'clear') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            var newvalue=screen.value;
console.log(newvalue,"this is new");

if(localStorage.getItem("data")==null){
localStorage.setItem("data","[]");
}

var oldvalue=JSON.parse(localStorage.getItem("data"));
console.log(oldvalue);
oldvalue.push(newvalue);

localStorage.setItem("data",JSON.stringify(oldvalue));

        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
   

}


function display(){
    var display=JSON.parse(localStorage.getItem("data"));
   console.log("i am clear");
 document.getElementById("print").innerHTML="";
   
    
}
function view(){
    var display=JSON.parse(localStorage.getItem("data"));
    for(let i=0;i<display.length;i++){
     
   document.getElementById("print").innerHTML+=i+1+"."+"  "+ display[i]+"<br>";
    }
}







