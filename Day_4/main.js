//task 1 
function multiply (num1 , num2) {
    resultMult = num1*num2;
    console.log(resultMult);
    return resultMult ;
};
function calculate (num3 , num4 , multiply) {
    return multiply (num3,num4);
};
function displayResult (){
   console.log('result of calc function = '+ calculate(3,3));
};
calculate(4,4,multiply);
// task 2 
function greetUSer (){
    var stopt = setTimeout(function (){
        console.log('Hello, User! ');
       
    }, 3000);
    
};
greetUSer();

function countdown (){
    var count = 10 ;
    var down  = setInterval(function(){
        if (count>0){
        console.log(count);
        count -- ; 
    }else {
        console.log("Time's up!");
        
    }
    },1000);
} ;
countdown();
function cancelInterval (){
    var timeOut = setInterval(function () {
        
    }, 5000);
    clearInterval(countdown.down);
}
cancelInterval();
function stopset (){
    setTimeout(function(){
        alert('This will be cleared ');
    } , 5000);
    clearTimeout(stop);
}
stopset();