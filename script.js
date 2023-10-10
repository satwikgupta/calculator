var panel = document.getElementById("box-panel")

document.getElementById("seven").addEventListener("click", function(){
    panel.value += '7';
})
document.getElementById("eight").addEventListener("click", function(){
    panel.value += '8';
})
document.getElementById("nine").addEventListener("click", function(){
    panel.value += '9';
})
document.getElementById("one").addEventListener("click", function(){
    panel.value += '1';
})
document.getElementById("two").addEventListener("click", function(){
    panel.value += '2';
})
document.getElementById("three").addEventListener("click", function(){
    panel.value += '3';
})
document.getElementById("four").addEventListener("click", function(){
    panel.value += '4';
})
document.getElementById("five").addEventListener("click", function(){
    panel.value += '5';
})
document.getElementById("six").addEventListener("click", function(){
    panel.value += '6';
})
document.getElementById("zero").addEventListener("click", function(){
    panel.value += '0';
})
document.getElementById("plus").addEventListener("click", function(){
    panel.value += '+';
})
document.getElementById("minus").addEventListener("click", function(){
    panel.value += '-';
})
document.getElementById("multiply").addEventListener("click", function(){
    panel.value += '*';
})
document.getElementById("divide").addEventListener("click", function(){
    panel.value += '/';
})
document.getElementById("clear").addEventListener("click", function(){
    panel.value = '';
})

document.getElementById("equal").addEventListener("click", function(){
    var expr = panel.value;
    panel.value = eval(expr)
})