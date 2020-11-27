function N1(){
    var a=10,b=3;
    console.log(a%b);
    if(a%b==0){console.log("Делится Результат:"+a/b)}
    else{console.log("Делится с отстатком Остаток:"+a%b)}
}
function N2(){
    var str=Math.pow(2,10);
    console.log(str);
    console.log(Math.sqrt(245))
    var arr=[4,2,5,19,13,0,10];
    for(var i=0;i<arr.length;++i){
        str+=Math.pow(arr[i],2);
    }
    console.log(Math.sqrt(str));
}
function N3(){
    var str=Math.sqrt(379);
    console.log(str.toFixed(0));
    console.log(str.toFixed(1));
    console.log(str.toFixed(2));
    str=Math.sqrt(587);
    var obj={"floor":Math.floor(str),"ceil":Math.ceil(str)};
    console.log("floor: "+obj["floor"]+" ceil: "+obj["ceil"]);
}
function N4(){
    let arr=[4,-2,5,19,-130,0,10];
    console.log("min: "+ Math.min.apply(null,arr)+" max: "+Math.max.apply(null,arr))
}
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function N5(){
    console.log(getRandom(1,100))
    var arr=[0,0,0,0,0,0,0,0,0,0];
    for(var i=0;i<arr.length;++i){
        arr[i]=Math.random();
        console.log(arr[i]);
    }
}
function N6(){
    var a=6, b=1;
    console.log(Math.abs(a-b));
    if(a>b){
        var c=a-b;
    }
    else{
        var c=Math.abs(a-b);
    }
    console.log(c);
}
function N7(){
    var arr=[12,15,20,25,59,79];
    var result=0;
    for(var i=0;i<arr.length;++i){
        result+=arr[i];
    }
    result/=arr.length;
    console.log("Среднее арифметическое: "+result);
    result=1;
    var a=3;
    var i=2;
    while(i<=a){
        result*=i;
        i++;
    }
    console.log(a+"!="+result);
}
function N8(){
    var a="js"
    a=a.toUpperCase();
    console.log(a);
    a=a.toLowerCase()
    console.log(a);
}
function N9(){
    var a="я учу javascript!";
    console.log(a.length);

    console.log(a.substr(1,16));
    console.log(a.substring(1,17));
    console.log(a.slice(1,16));

    console.log(a.indexOf("учу"))

    var n=4;
    if(a.length>n){
        console.log(a.slice(0,n)+"...");
    }
    else{
        console.log(a);
    }
}
function N10(){
    var a="'Я-учу-javascript!";
    a=a.replaceAll("-","!");
    console.log(a);
}
function N11(){
    var a="я учу javascript!";
    var s=a.split(" ");
    console.log(s);

    var s=a.split("");
    console.log(s);

    var date="2020-11-18";
    var buff=date.substring(date.lastIndexOf("-")+1,date.length);
    buff+="."+date.substring(date.indexOf("-")+1,date.lastIndexOf("-"))
    buff+="."+date.substring(0,date.indexOf("-"));
    date=buff;
    console.log(date);
}
function N12(){
    var a=["я","учу","javascript","!"];
    var s=a.join("+",a);
    console.log(s);
}
function N13(){
    var m1=[1,2,3];
    var m2=[4,5,6];
    console.log(m1.concat(m2));
}
function N14(){
    var m1=[1,2,3];
    console.log(m1.reverse());
}
function N15(){
    var m1=[1,2,3];
    m1.unshift(4,5,6);
    console.log(m1);
    m1=[1,2,3];
    m1.push(4,5,6);
    console.log(m1);
}
function N16(){
    var m=['js', 'css', 'jq'];
    console.log(m.shift());
    console.log(m.pop());
}
function N17(){
    var m=[1,2,3,4,5,6];
    var m1=m.slice(0,3);
    var m2=m.slice(3,-1);
    console.log(m1);
    console.log(m2);
}
function N18(){
    var m=[1,2,3,4,5];
    m.splice(1,2);
    console.log(m);

    m=[1,2,3,4,5];
    m.splice(0,1);
    m.splice(3,4);
    console.log(m);

    m=[1,2,3,4,5];
    m.splice(2,0,"a","b","c");
    console.log(m);

    m=[1,2,3,4,5];
    m.splice(2, 0, 'a', 'b');
    m.splice(6, 0, 'c');
    m.splice(8, 0, 'e');
    console.log(m);
}
function N19(){
    var m=[3, 4, 1, 2, 7];
    console.log(m.sort())
}
function N20(){
    var m={js:'test', jq: 'hello', css: 'world'};
    console.log(Object.keys(m));
}