let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let total = document.getElementById('total');
let mood = 'create';
let temp;
function calctotal() {
    if (price.value != ''){
        let result = (+price.value + +taxes.value +  +ads.value ) - +discount.value;
        total.innerHTML = result;
        total.style.background = 'green' ;
    }else {
        total.innerHTML = '';
        total.style.background = 'red' ;
    }
}

// create op
let data ;

if(localStorage.products !=null) {
    data = JSON.parse(localStorage.products);
}else {
    data = [] ;
}

submit.onclick = function (){
    let newmob = {
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads   : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        count :count.value,
        category : category.value
    }
    if (mood === 'create'){
if (newmob.count >1){
        for (let i=0 ; i<newmob.count ; i++){
            data.push(newmob);
        }
    }else {
        data.push(newmob);
    }
    }else {
        data [temp] = newmob;
        mood = 'create'
        submit.innerHTML = 'create'
        count.style.display = 'block';
    }
    
    
    localStorage.setItem('products' , JSON.stringify(data));
    clear ();
    showData ();
}

//clear inputs 

function clear (){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML = '';
}

// Read op 

function showData (){
    calctotal();
    let table = '' ;
      
     for (let i = 0 ; i<data.length ; i++){
        table += `
     <tr>
     <td>${i}</td>
     <td>${data[i].title}</td>
     <td>${data[i].price}</td>
     <td>${data[i].taxes}</td>
     <td>${data[i].ads}</td>
     <td>${data[i].discount}</td>
     <td>${data[i].total}</td>
     <td>${data[i].category}</td>
     <td><button onclick='updateData(${i})' id="update">update</button></td>
     <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
     </tr>`;
    
     }
     document.getElementById('tbody').innerHTML = table;
     let btndel = document.getElementById("deleteAll");
     if(data.length>0){
        btndel.innerHTML = `
        <button onclick = "deleteAll()">Delete All ($data.length)</button>
        `
     }else {
        btndel.innerHTML = '';
     }
     
}


 showData ();
 // Delete op 
 function deleteData(i){
    data.splice(i,1);
    localStorage.products = JSON.stringify(data);
    showData();
 }
 //delete all 
function deleteAll(){
    localStorage.clear();
    data.splice(0);
    showData();
}
//update 
function updateData(i) {
    title.value = data[i].title;
    price.value = data[i].price;
    taxes.value = data[i].taxes;
    ads.value = data[i].ads;
    discount.value =data[i].discount;
    calctotal();
    count.style.display = 'none';
    submit.innerHTML = 'Update';
    mood = 'update';
    temp = i ;
    scroll ({
        top : 0,
        behavior : "smooth"

    });
};
