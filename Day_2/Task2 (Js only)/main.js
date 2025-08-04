var Name = prompt('Name : ');
var birth_year = prompt('Your birth year : ');
var student = confirm('Are you student ? ');
var current_year = new Date().getFullYear();
var age = current_year - birth_year  ;
if (age > 13) {
    console.log('Hello '+Name + ',you are '+age +' years old ' +'Category : Kid ' );
    alert('Hello '+Name + ',you are '+age +' years old ' +'Category : Kid ');
    document.writeln('Hello '+Name  + ',you are '+age  +' years old '  + 'Category : Kid ');

}else if (13<age<17) {
     console.log('Hello '+Name + ',you are '+age +' years old ' +'Category : Teen ' );
    alert('Hello '+Name + ',you are '+age +' years old ' +'Category : Teen ');
    document.writeln('Hello '+Name + ',you are '+age  +' years old ' + 'Category : Teen ');
} else if (18<age<59){
     console.log('Hello '+Name + ',you are '+age +' years old ' +'Category : Adult ' );
    alert('Hello '+Name + ',you are '+age +' years old ' +'Category : Adult ');
    document.writeln('Hello '+Name  + ',you are '+age  +' years old '  + 'Category : Adult ');
} else if (age>=60){
    console.log('Hello '+Name + ',you are '+age +' years old ' +'Category : Senior ' );
    alert('Hello '+Name + ',you are '+age +' years old ' +'Category : Senior ');
    document.writeln('Hello '+Name  + ',you are '+age  +' years old '  + 'Category : Senior ');
} else {
    console.log('based on your age you are Dead Game Over');
    alert('based on your age you are Dead Game Over');
    document.writeln('based on your age you are Dead Game Over');
}
if (student == true){
     console.log('Dont forget to study hard!');
    alert('Dont forget to study hard!');
    document.writeln('Dont forget to study hard!');
}

