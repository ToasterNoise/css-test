document.getElementById("btnkek").onclick = function () {
    document.getElementById("text").style.color = "blue" ;
}

document.getElementById("btnred").onclick = function () {
    document.getElementById("text").style.color = "red" ;
}

var b0 = document.getElementById("html");
var b1 = document.getElementById("head");
var b2 = document.getElementById("body");
var b3 = document.getElementById("btndark");
var b5 = document.getElementById("text");
var darkCount = 1;



document.getElementById("btndark").onclick = function () {
    darkCount = darkCount + 1
    if (darkCount % 2 == 0){
        b2.style.background = "black";
        b0.style.background = "black";
        //b3.style.background = "black";
        b5.style.color = "white";
}    
    else {
        b2.style.background = "white";
        b0.style.background = "white";
        //b3.style.background = "white";
        b5.style.color = "black";
    }
    
    
    
    

}
