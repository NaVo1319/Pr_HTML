function N1_1(){
    alert("Чего надо?")
}

function N1_2(){
    alert("Зачем нажал?")
}

function N2_1(){
    document.getElementById("2_1").textContent="Белки это не совы";
}

function N2_2(){
    document.getElementById("2_2").setAttribute("src","Resurses/Ga2.jpg");
}

function N3_1(x){
    x.textContent="Задание 3_1: Хотя некотрые совы похожи на белок";
}
document.addEventListener('click',function(event){
    if(event.target.id!="3_1"){
        document.getElementById("3_1").textContent="Задание 3_1: Кнопка справа нет";
    }
})
function N3_2(x){
    if(x.id=="b1"){
        x.setAttribute("disabled",true)
    }
    else{
        document.getElementById("b1").removeAttribute("disabled")
    }
}
function N3_3(x){
    x.value=Number(x.value)+1;
    x.textContent="Задание 3.3 Нажато "+x.value+" раз"
}
function N4_1(){
    var a=document.getElementById("4_1");
    a.style.backgroundColor="black"
    a.style.color="white"
    a.style.borderRadius="10px"
    a.style.width="200px"
    a.style.height="100px"
    a.style.padding="10px"
    a.style.paddingTop="50px"
    a.textContent="Помни они следят за тобой"

}
function N4_2(x){
    var a=document.getElementById("4_2")
    if(x.id=="b1"){
        a.style.opacity=0
    }
    else{
        a.style.opacity=100
    }
}

function N5_1(x){
    document.getElementById(x).innerHTML="<b>"+document.getElementById(x).innerHTML+"</b>"
}

function N5_2(){
    document.getElementById("result").innerText=Number(document.getElementById("1").value)+Number(document.getElementById("2").value)
}

function N5_3(x){
    document.getElementById("5.3").innerText=x.value;
}

function N5_4(){
    var a=document.getElementsByTagName("a");
    for(var i=0;i<a.length;++i){
        a[i].innerText="ссылка "+(i+1)+" ("+a[i].href+")";
    }
}

function N6_1(){
    var a=document.getElementsByTagName("p")
    a[23].innerText="00"
    a[25].innerText="00"
}

function N6_2(){
    var a=document.getElementsByTagName("p")
    var j=1;
    for(var i=27;i<32;++i){
        a[i].innerText=j+". "+a[i].innerText
        j++
    }
}

function N7_1(){
    window.setInterval(N7_1_, 1000);
}
function N7_1_(){
    var test = document.getElementById('timer');
    test.innerHTML = parseInt(test.innerHTML)+1;
}

//Задание 7.2
function N7_2(){
    window.timerId = window.setInterval(timer1, 500);
    document.getElementById('go').disabled = true;
    document.getElementById('stop').disabled = false;
}
function stop(){
    window.clearInterval(window.timerId);
    document.getElementById('go').disabled = false;
    document.getElementById('stop').disabled = true;
}
function timer1(){
    var test = document.getElementById('timer2');
    test.innerHTML = parseInt(test.innerHTML)+1;
}

//Задание 7.3
function N7_3(){
    window.timerId = window.setInterval(timer2, 500);
}
function timer2(){
    var clock = document.getElementById('clock');
    var date = new Date();
    clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
}
function addZero(num){
    if(num <=9) return '0'+num;
        else return num;
}

//Задание 7.4
function N7_4(){
    window.timerId = window.setInterval(timer3, 1000);
}
function timer3(){
    if(window.number == undefined || window.number == 4) {
        window.number = 1;
    } else window.number = window.number + 1;
    var img = document.getElementById('img');
    img.src = 'Resurses/Ga'+window.number+'.jpg'
}

//Задание 7.5
function N7_5(){
    window.timerId = window.setInterval(timer4, 1000);
    document.getElementById('go').disabled = true;
    document.getElementById('stop').disabled = false;
} 
function timer4(){
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var tmp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = tmp;
}
function stop2(){
    window.clearInterval(window.timerId);
    document.getElementById('go').disabled = false;
    document.getElementById('stop').disabled = true;
}

//Задание 7.6
function go(){
    window.timerId = window.setInterval(timer5, 1000);
}
function timer5(){
    var seconds = document.getElementById('seconds');
    var minutes = document.getElementById('minutes');
    var hours = document.getElementById('hours');
    var now = new Date();
    var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0);
    var diff =  Math.floor((midnight - now)/1000);//разница в милисекундах, перевели в секунды
    var hoursRemain   = Math.floor(diff/(60*60));
    var minutesRemain = Math.floor((diff-hoursRemain*60*60)/60);
    var secondsRemain = Math.floor(diff%60);
    hours.innerHTML   = hoursRemain;
    minutes.innerHTML = addZero(minutesRemain);
    seconds.innerHTML = addZero(secondsRemain); 
}
function addZero(num){
    if(num <=9) return '0'+num;
        else return num;
}
