function col(){
    var a=document.getElementById("col");
    if(a.selectedIndex==0){
        alert(60*60);
    }
    if(a.selectedIndex==1){
        alert(60*60*24);
    }
    if(a.selectedIndex==2){
        alert(60*60*24*31);
    }
}
function time(){
    var date=new Date();
    var s=date.getSeconds();
    var m=date.getMinutes();
    var h=date.getHours();
    alert(h+"."+m+"."+s);
}
function R(){
var a=document.getElementById("R").value;
alert(a*a);
}
function N61(){
    var num=47;
    num+=7;
    num-=18;
    num*=10;
    num/=15;
    alert(num);
}
function N62(){
    var num=10;
    num++;
    num++;
    num--;
    alert(num);
}
function N7(){
    var arr=["a","b","c"];
    alert(arr);
    alert(arr[0]+arr[1]+arr[2]);
    arr=["a","b","c","d"];
    alert(arr[0]+"+"+arr[1]+","+arr[2]+"+"+arr[3]);
    arr=[2,5,3,9];
    var result=arr[0]*arr[1]+arr[2]*arr[3];
    alert(result);
}
function N8(){
    var obj={"a": 1,"b": 2,"c":3};
    alert(obj["c"]+" "+obj.c);
    obj={"Коля":1000,"Вася":500,"Петя":200};
    alert("Коля ->"+obj["Коля"]+", Петя ->"+obj["Петя"]);
    obj={1:"Понедельник",2:"Вторник",3:"Среда",4:"Четверг",5:"Пятница",6:"Суббота",0:"Воскресенье"};
    var x=new Date;
    alert(obj[x.getDay()]);
    var day=3;
    alert(obj[day]);
}
function N9(){
    var mass=[[1,2,3],[4,5,6],[7,8,9]];
    alert(mass[1][0]);
    var obj={"js":["jQuery","Angular"],"php":"hello","css":"world"};
    alert(obj["js"][0]);
    obj={"ru":["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]
    ,"en":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]};
    alert(obj["ru"][0]+", "+obj["en"][2]);
    var day=3;
    var lang="ru"
    alert(obj[lang][day]);
}
function N10(){
    var a=1;
    if(a==0){alert("Верно")}
    else{alert("Неверно")};

    if(a>0){alert("Верно")}
    else{alert("Неверно")};

    if(a<0){alert("Верно")}
    else{alert("Неверно")};

    if(a>=0){alert("Верно")}
    else{alert("Неверно")};

    if(a<=0){alert("Верно")}
    else{alert("Неверно")};

    if(a!=0){alert("Верно")}
    else{alert("Неверно")};

    a="test";

    if(a=="test"){alert("Верно")}
    else{alert("Неверно")};

    if(a==="1"){alert("Верно")}
    else{alert("Неверно")};
}
function N11(){
    var test=false;
    if(test){alert("Верно")}
    else{alert("Неверно")};
    alert((test)?"Верно":(!test)?"Неверно":"")

    if(!test){alert("Верно")}
    else{alert("Неверно")};
    alert((!test)?"Верно":(test)?"Неверно":"")
}
function N12(){
    var a=5,b=5;
    if(a>0 && a<5){alert("Верно")}
    else{alert("Неверно")};

    if(a==0 || a==2){alert(a+=7)}
    else{alert(a/=10)};

    if(a<=1 && b>=3){alert(a+b)}
    else{alert(a-b)};

    if((a>2 && a<11) || (b>=6 && b<11)){alert("Верно")}
    else{alert("Неверно")};
}
function N13(){
    var num=3,result;
    switch(num){
        case 1:
            result="зима";
            break;
        case 2:
            result="весна";
            break;
        case 3:
            result="лето";
            break;
        case 4:
            result="осень";
            break;
    }
    alert(result);
}
