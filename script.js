function clearDisplay(){
    document.getElementById("display-bar").innerHTML = "";
}

function display(userinput){
     document.getElementById("display-bar").innerHTML +=  userinput;
}


function calculate(){
    var answer = eval(document.getElementById("display-bar").innerHTML);
    document.getElementById("display-bar").innerHTML = answer;

    
}
