function N8(a){
    if(a==1)alert(document.getElementById("elem").scrollTop)
    if(a==2)document.getElementById("elem").scrollTop=200
    if(a==3)document.getElementById("elem").scrollTop=(document.getElementById("elem").scrollHeight)-460
}
function N9(a){
    if(a==1){
        alert(window.pageYOffset);
    }
    if(a==2){
        alert(window.pageXOffset);
    }
    if(a==3){
        window.scrollTo(300,500)
    }
    if(a==4){
        window.scrollBy(300)
    }
    if(a==5){
        window.scrollTo(window.scrollHeight,0)
    }
}
function N10(a){
    var x1=document.getElementById("10.1");
    var x2=document.getElementById("10.2");
    var x3=document.getElementById("10.3");
    if(a==1){
        x1.remove();
    }
    if(a==2){
        x2.remove();
    }
    if(a==3){
        x3.remove();
    }
}
function N11(a){
    var mass=[document.getElementById("i1"),document.getElementById("i2"),document.getElementById("i3")]
    var buff=[document.getElementById("i1").getAttribute("src"),document.getElementById("i2").getAttribute("src"),document.getElementById("i3").getAttribute("src")];
    if(a==1){
        mass[0].setAttribute("src", buff[2])
        mass[1].setAttribute("src",buff[0])
        mass[2].setAttribute("src",buff[1])
    }
    else{
        mass[2].setAttribute("src", buff[1])
        mass[1].setAttribute("src",buff[0])
        mass[0].setAttribute("src",buff[2])
    }
}

//Задание 12
window.onclick = function(event){
    var a=event.target;
    if(a.id=="p1"){
        if(document.getElementById("p11").style.display=="none")document.getElementById("p11").style.display="block"
        else document.getElementById("p11").style.display="none"
    }
    if(a.id=="p2"){
        if(document.getElementById("p21").style.display=="none")document.getElementById("p21").style.display="block"
        else document.getElementById("p21").style.display="none"
    }
    if(a.id=="p_"){
        if(document.getElementById("p111").style.display=="none")document.getElementById("p111").style.display="block"
        else document.getElementById("p111").style.display="none"
    }
}