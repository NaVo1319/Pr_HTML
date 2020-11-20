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