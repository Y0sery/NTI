var items = []; 
function add (item) {
    items.push(item);
};
function Read (){
    items.forEach(function(items, index){
        console.log(`item ${index} : ${items}`);
});
    }
function Update (index , newItem) {
    items[index] = newItem;
}
function Delete (index){
    if (index >= 0 && index < items.length){
    var removed = items.splice(index, 1);
    removed[0];
    };
};
    add('ora');
    add('h');
    add('os');
    add('df');
    Read();
    Update(0,'king');
    Read();
    Delete(0);
    Read();

