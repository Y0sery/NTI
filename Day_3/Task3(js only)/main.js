var num = [-4,-3,-2,-1,0,1,2,3,4,5];
var evenSum = 0 ;
for(var i=-4;i<num.length;i++){
    if(i%2==0){
        evenSum +=i;
        continue;
    }
}
console.log('Sum of Postives = '+evenSum);
var sum = 0 ;
for (var i = 0 ; i<num.length;i++){
    sum += num[i];
}
console.log('Sum of negatives = '+sum);
num.push(19);
console.log('Array after push : '+ num);
num.shift();
console.log('Array After delete the first element '+num);
// Task 2 
var student = {
    name : "yousry " , 
    age : 22 ,
    grade :" B+" , 
    isGraduated : false 
};
console.log("Name : "+student.name +"Age : " + student.age);
student.grade = "A";
console.log("Grade after update : "+student.grade);
var keys = Object.keys(student);
console.log(keys);
var values = Object.values(student);
console.log(values);
student.email = 'algoghley@student.com';
console.log(student);
delete student.isGraduated;
console.log(student);
// task 3 
var students = [ {name : 'King' , age :22 , grade : 'A' , isGraduated : true } ,
                {name : 'sara' , age :22 , grade : 'B' , isGraduated : true } ,
                {name : 'Ali' , age :23 , grade : 'D' , isGraduated : false} ,
                {name : 'claara' , age :22 , grade : 'B-' , isGraduated : false } ,
                {name : 'jeen' , age :25 , grade : 'C+' , isGraduated : true }
]
console.log("All Students ");
console.log(students);
var totalAge = 0;
var graduatedCount = 0;
var notGraduatedCount = 0;
for (var i = 0; i < students.length; i++) {
    totalAge += students[i].age;

    if (students[i].isGraduated === true) {
        graduatedCount++;
    } else {
        notGraduatedCount++;
    }
}
var averageAge = totalAge / students.length;
console.log("Average age of students:", averageAge);
console.log("Number of graduated students:", graduatedCount);
console.log("Number of non-graduated students:", notGraduatedCount);
for (var i = 0 ; i<students.length ; i++){
    console.log(`Student ${i + 1 } Keys : ` , Object.keys(students[i]));
    console.log(`Student ${i + 1 } Vlaues : ` , Object.values(students[i]));
};
var newStudent = {
    name: "Yasmine",
    age: 23,
    grade: "B",
    isGraduated: true,
    email: "yasmine23@example.com"
};
students.push(newStudent);
console.log(students);
for (var i = 0; i < students.length; i++) {
    delete students[i].isGraduated;
}
console.log('After delete isGradeuated'+students);
var studentNames = [];
var totalAge = 0;
var graduatedCount = 0;
var notGraduatedCount = 0;
for (var i = 0; i < students.length; i++) {
    var student = students[i];
    studentNames.push(student.name);
    totalAge += student.age;

    if (student.isGraduated) {
        graduatedCount++;
    } else {
        notGraduatedCount++;
    }
}
var averageAge = totalAge / students.length;
console.log("Student Names:", studentNames);
console.log("Average Age:", averageAge);
console.log("Graduated Students:", graduatedCount);
console.log("Non-Graduated Students:", notGraduatedCount);

