var Name = prompt('Enter your name ' );
var Age = prompt('Enter your age ' );
var Yofex = prompt('How many years of experience do you have ? ' );
var Rate = prompt ('On a scale from 1 to 10, how would you rate your proficiency');
var Salery = prompt ('Your salery : ');
var Now = new Date();
var Hour = Now.getHours;
if (Yofex < 2) {
    console.log('Your job category : Junior')
    document.writeln('Your job category : Junior');
    alert(' Your job category : Junior');
} else if(2<Yofex<5) {
    console.log('Your job category : Mid-Level');
    document.writeln('Your job category : Mid-Level');
    alert('Your job category : Mid-Level');
} else if (5<Yofex<10) {
    console.log('Your job category : Senior');
    document.writeln('Your job category : Senior');
    alert('Senior');
} else if (Yofex > 10) {
    console.log('Your job category : Expert');
    document.writeln('Your job category : senior');
    alert('Your job category : senior');
}else {
    alert('Please try again ! ');
} ;
var Level = prompt('Put your level from 1 : 10  ');
switch (true) {
    case (Level >= 9) : 
    console.log('Your level is : Excellent');
    document.writeln('Your level is : Excellent');
    alert('Your level is : Excellent');
    break;
    case (7 <=Level<= 8 ) :
    console.log('Your level is : good');
    document.writeln('Your level is : good');
    alert('Your level is : good');
    break;
    case (5<=Level<=6) : 
    console.log('Your level is : average');
    document.writeln('Your level is : average');
    alert('Your level is : average');
    break;
    case (Level < 5) :
    console.log('Your level is : needs Improvement');
    document.writeln('Your level is : needs Improvement');
    alert('Your level is : needs Improvement');
    default : 
    console.log('Try again ! ');
    document.writeln('Try again !');
    alert('Try again !');
} ;
if (0<Yofex<2) {
    var bonus = Salery * 10/100 ;
    console.log('Bonus = ' + bonus );
    document.writeln('Bonus = ' + bonus);
    alert('Bonus = ' + bonus ) ;
}else if (3<Yofex<5) {
    bonus = Salery * 15/100 ; 
    console.log('Bonus = ' + bonus );
    document.writeln('Bonus = ' + bonus);
    alert('Bonus = ' + bonus ) ;
}else if (Yofex>5){
    bonus = Salery * 20/100 ;
    console.log('Bonus = ' + bonus );
    document.writeln('Bonus = ' + bonus);
    alert('Bonus = ' + bonus ) ;
}else {
    console.log('Try again ! ');
    document.writeln('Try again ! ');
    alert('Try again ! ') ;
}
if (9<=Hour<=18) {
     console.log('You are now in day Shift ');
    document.writeln('You are now in day Shift ');
    alert('You are now in day Shift ') ;
} else if (18<=Hour<=9) {
     console.log('You are now in night Shift ');
    document.writeln('You are now in night Shift ');
    alert('You are now in night Shift ') ;
}
var Final_Salery = parseInt(Salery) + parseInt(bonus) ;
    console.log('Your salery  = '+Final_Salery);
    document.writeln('Your salery  = '+Final_Salery);
    alert('Your salery  = '+Final_Salery) ;

