

function bgcolor(){
    var random = "ABCDEF0123456789"; 
    var randomcode = "#";

    
    for(var i = 0; i <6 ; i++) {
        randomcode += random[Math.floor(Math.random()*16)];
    }

    document.body.style.backgroundColor = randomcode;
    document.getElementById("colorcode").innerText = randomcode;

}

bgcolor();