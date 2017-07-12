var SECOND = 1000;

function Morning(){
    console.log("Morning");
}

function Afternoon(){
    console.log("Good Morning");
    setTimeout(function(){
        console.log("Good Afternoon");
    }, 1*SECOND);
    // 5초 이상 걸리는 작업
    for (let i=0; i < 5000000000; i++);
    console.log("Good Night");

}

function asyncJs(){
    setTimeout(Morning,5*SECOND);
    Afternoon();
}

asyncJs();

/*
 asyncJs();
 setTimeout(Morning,2*SECOND); =>2초              <<<
 Afternoon();
 > console.log("Good Morning");
 setTimeout(function(){
 console.log("Good Afternoon");
 }, 15*SECOND); =>15초                          <<<<<
 >>for (let i=0; i < 1000000000; i++);
 >>console.log("Good Night");

 */
