var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filterBar=document.getElementById('filter');

//Add Items 
form.addEventListener('submit',addItem);

//Delete Item
itemList.addEventListener('click',removeItem);

//Filter Items
filterBar.addEventListener('keyup',filterItem);

//Add new Item to the list
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    
    //create a li element 
    var li=document.createElement('li');

    //set className of li
    li.className='list-group-item';

    //add delete btn to li
    var delBtn=document.createElement('button');
    //set className of btn
    delBtn.className='btn btn-danger btn-sm float-right delete';
    //add text 'x' to btn
    delBtn.appendChild(document.createTextNode('x'));

    //Add text value to this new li element
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(delBtn);

    itemList.appendChild(li);
    console.log('submitted successfully..');
}

//Remove item from the list
function removeItem(e){
    //Whether the clicked target is the delBtn
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete this Item?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
            console.log('removed successfully');
        }
    }
}

function filterItem(e){
    //convert text to lowercase
    var keyword=filterBar.value.toLowerCase();
    //get li list
    var items=document.getElementsByTagName('li');
    //iterate the itemList and filter out
    Array.from(items).forEach(function(item){
        //textNode is the first child of item, is also the content of this li
        var itemName=item.firstChild.textContent;
        //判断当前item是否包含子字符串keyeord
        if(itemName.toLowerCase().indexOf(keyword)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}