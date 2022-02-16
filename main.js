
var counter = 30;
setInterval( function() {
    counter--;
    var circle1=document.getElementById("circle1");
    var circle2=document.getElementById("circle2");
    var circle3=document.getElementById("circle3");
    if (counter >= 0)
    {
        id=document.getElementById("count");
        id.innerHTML=counter;
    }
    if (counter===0) {
        circle3.style.background="#666";
        circle2.style.background="yellow";
        count.style.display="none";
        document.body.style.backgroundColor = "yellow";
    }
},1000);
var counter1 = 55;
setInterval( function() {
    counter1--;
    var count1=document.getElementById("count1");
    count1.style.display="none";
    if (counter1 >= 0) {
        id=document.getElementById("count1");
        id.innerHTML=counter1;
    }
    if (counter1<=25) {
        count1.style.display="block";
    }
    if (counter1===0) {
        circle2.style.background="#666";
        circle1.style.background="red";
        document.body.style.backgroundColor = "red";
    }
    if (counter1<=0) {
        count1.style.display="none";
    }
},1000);

var counter2 = 65;
setInterval( function() {
    counter2--;
    var count2=document.getElementById("count2");
    count2.style.display="none";
    if (counter2 >= 0) {
        id=document.getElementById("count2");
        id.innerHTML=counter2;
    }
    if (counter2<=10) {
        count2.style.display="block";
    }
    if (counter2===0) {
        circle1.style.background="#666";
        circle3.style.background="green";
        document.body.style.backgroundColor = "green";
    }
    if (counter2<=0) {
        count2.style.display="none";
    }
},1000);


function btn1()
{
    if (counter >= 0 && counter <= 30 )
    document.getElementById("circle1").style.boxShadow="1px 1px 36px 5px red";
    if (counter1 >= 0 && counter1 <= 25 )
    document.getElementById("circle1").style.boxShadow="1px 1px 36px 5px red";
}

function btn2()
{
    if (counter >= 0 && counter <= 30 )
    document.getElementById("circle2").style.boxShadow="1px 1px 36px 5px red";
    if (counter2 >= 0 && counter2 <= 10 )
    document.getElementById("circle2").style.boxShadow="1px 1px 36px 5px red";
}

function btn3()
{
    if (counter1 >= 0 && counter1 <= 25 )
    document.getElementById("circle3").style.boxShadow="1px 1px 36px 5px red";
    if (counter2 >= 0 && counter2 <= 10 )
    document.getElementById("circle3").style.boxShadow="1px 1px 36px 5px red";
}
