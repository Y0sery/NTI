var name = "Yousry" ;  
var age  = 22;
var status = true ; 
var phone = null ; 
var mobile = undefined ; 
//======================> 2 output 
console.log("Name "+name);
console.log("Age "+age);
console.log("status "+status);
console.log("Phone "+phone);
console.log("Mobile "+ mobile);

//=====================>3 typeof

console.log(typeof name);
console.log(typeof age);
console.log(typeof status);
console.log(typeof phone);
console.log(typeof mobile);

//=====================> 4 
var firstName = "Mahmoud " ; 
var lastName = "Algoghley " ; 
console.log(firstName + " " + lastName );
console.log(`${firstName}  ${lastName}`);
//================================================  task 2
var userName = "Mahmoud"; 
var password = 'asd12';
if (userName===null){
    window.alert ( ' Username is required ');
}else if (password.length < 8 ){
    window.alert('Password must be at least 8 characters');
}else {
    console.log('Username : '+ userName);
    console.log('Password : '+ password);
}

