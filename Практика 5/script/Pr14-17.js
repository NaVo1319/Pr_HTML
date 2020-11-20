function N14for(){
    var a=document.getElementById("1");
    a.textContent="(for) Числа от 1 до 100 : "
    for(var i=1;i<=100;++i){
        a.textContent+=i+" ";
    }

    var a=document.getElementById("2");
    a.textContent="(for) Числа от 11 до 33 : "
    for(var i=11;i<=33;++i){
        a.textContent+=i+" ";
    }

    var a=document.getElementById("3");
    a.textContent="(for) Чётные числа от 0 до 100 : "
    for(var i=0;i<100;i+=2){
        a.textContent+=i+" ";
    }
    var a=document.getElementById("4");
    a.textContent="(for) Сумма чисел от 1 до 100 : "
    var sum=0;
    for(var i=1;i<100;i+=2){
        sum+=i;
    }
    a.textContent+=sum;
}
function N14while(){
    var a=document.getElementById("1");
    a.textContent="(while) Числа от 1 до 100 : "
    var i=1;
    while(i<=100){
        a.textContent+=i+" ";
        i++;
    }

    var a=document.getElementById("2");
    a.textContent="(while) Числа от 11 до 33 : "
    var i=11
    while(i<=33){
        a.textContent+=i+" ";
        i++;
    }

    var a=document.getElementById("3");
    a.textContent="(while) Чётные числа от 0 до 100 : "
    var i=0
    while(i<100){
        a.textContent+=i+" ";
        i+=2;
    }
    var a=document.getElementById("4");
    a.textContent="(while) Сумма чисел от 1 до 100 : "
    var sum=0;
    var i=1
    while(i<100){
        sum+=i;
        i++;
    }
    a.textContent+=sum;
}
function N15(){
    var arr=[1,2,3,4,5];
    var a=document.getElementById("5");
    var result=0;
    a.textContent="";
    for(var i=0;i<arr.length;++i){
        a.textContent+=arr[i]+" ";
        result+=arr[i];
    }
    a.textContent+=" Сумма: "+result;
}
function N16(){
    var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
    var a=document.getElementById("6");
    a.innerText="";
    for(key in obj){
        a.innerText+="key["+key+"]="+obj[key]+";\n";
    }
    var a=document.getElementById("7");
    a.innerText=""
    obj={"Коля": 200,"Вася": 300,"Петя":400}
    for(key in obj){
        a.innerText+=key+" - зарплата "+obj[key]+" долларов.\n";
    }
}
function N17(){
    var arr=[2,5,9,15,0,4];
    var a=document.getElementById("8");
    a.innerText="17.1:_";
    for(var i=0;i<arr.length;++i){
        if(arr[i]>3 && arr[i]<10){
            a.innerText+=arr[i]+"_";
        }
    }
    a.innerText+="\n";

    arr=[1,2,-5,-67,34,-6];
    var result=0;
    for(var i=0;i<arr.length;++i){
        if(arr[i]>0){
            result+=arr[i];
        }
    }
    a.innerText+="17.2:_"+result+"\n";

    arr=[1,2,5,9,4,13,4,10];
    for(var i=0;i<arr.length;++i){
        if(arr[i]==4){
            a.innerText+="17.3:_Есть\n";
            break;
        }
    }

    arr=[10,20,50,235,3000];
    var b;
    a.innerText+="17.4:"
    for(var i=0;i<arr.length;++i){
        b=""+arr[i];
        if(b[0]==1||b[0]==2||b[0]==5){
            a.innerText+="_"+arr[i];
        }
    }

    arr=[1,2,3,4,5,6,7,8,9];
    var b="-";
    for(var i=0;i<arr.length;++i){
        b+=arr[i]+"-";
    }
    a.innerText+="\n17.5:_"+b+"\n";

    arr=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    var b="-";
    a.innerText+="17.6:"
    for(var i=0;i<arr.length;++i){
        if(arr[i]==="Воскресенье" || arr[i]==="Суббота"){
            a.innerHTML+="_<b>"+arr[i]+"</b>";
        }
        else{
            a.innerText+="_"+arr[i];
        }
    }
    var a=document.getElementById("9");
    arr=["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
    var day=new Date;
    day=day.getDay();
    a.innerText="17.7:"
    for(var i=0;i<arr.length;++i){
        if(arr[i]===arr[day-1] ){
            a.innerHTML+="_<b>"+arr[i]+"</b>";
            var a=document.getElementById("09");
            a.innerText="";
        }
        else{
            a.innerText+="_"+arr[i];
        }
    }

    a=document.getElementById("11");
    var n=1000;
    var num=0;
    while(n>50){
        n/=2;
        num++;
    }
    a.textContent="\n 17.8: n="+n+"; num="+num;
}