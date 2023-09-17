let x = 0;
let p = -10;
let i = 1;
let doom = document.getElementsByClassName('item');
let confr = (doom.length - 3)*(-280);
let confl = 0;
//left
document.getElementById("l").addEventListener("click", function(){
       x += 280;
       if (x > confl){x = confr - 280}else{
    document.getElementById("move").style.marginLeft = x + "px";}
});
//right
document.getElementById("r").addEventListener("click", function(){
    x += -280;
    p += -10;
    if (x < confr){x = 280}else{
    document.getElementById("move").style.marginLeft = x + "px";}
});


// botao

function Evento(){
    alert('E-mail enviado com sucesso');
}