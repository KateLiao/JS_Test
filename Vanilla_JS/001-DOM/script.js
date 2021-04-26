//+++++ DOM Crash Course 001 START +++++
//console.dir(document); // Examine the document object in browser
// console.log(document.domain);//输出使用的domain
// console.log(document.URL);//URL必须是大写
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.all)
// console.log(document.all[10])//取得document数组中的第十个tag

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//Get Element by id
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(document.getElementById('header-title'));
// headerTitle.textContent='hello';//改变元素的文本内容
// headerTitle.innerText='Goodbye';//same as above
//上面这两个函数最大的不同在于，innerText会关注所选中元素的style，
//如果说该元素的style中有内容的display属性为none，则该内容将不显示；而textContent则会将所有文本输出；

//headerTitle.innerHTML='<h3>Hello</h3>';
//通过innerHTML函数能够将headerTitle这个<h1>中的文本替换，但是不能够将headerTitle的<h1>标签替换成<h3>

//header.style.borderBottom='solid 3px #000';
//通过style直接修改元素的样式

//Get Element By Class Name
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent="Test dom manipulation";
// items[1].style.fontWeight='bold';

//Get Element By Tag Name
// var li=document.getElementsByTagName('li');
// console.log(li);

//Query Selector
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.placeholder='pls input something';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='发送';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color="maroon";

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="blue";

//Query SelectorAll
// var titles=document.querySelectorAll('.title');
// console.log(titles);

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="#f4f4f4";
//     console.log(odd[i].textContent);
// }
//+++++ DOM Crash Course 001 END +++++

//+++++ DOM Crash Course 002 START +++++
//parentElement
//var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentElement.style.backgroundColor='#5212fd';
// //parentNode基本上和parentElement是一个东西，they can be interchanged；

//childElement使用与parentElement大同小异，child能有多个，因此还有firstChild，lastChild
// var itemList=document.querySelector('.list-group');
// console.log(itemList.firstChild);//基本没用，因为firstChild会把parentNode后的linebreak当作第一个孩子，这里的log内容是'#text';
// console.log(itemList.firstElementChild);//这个方法才能真实拿到第一个孩子的标签元素；

//nextSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousElementSibling);

//create elements and insert them

//var newDiv=document.createElement('div');
//Add class
//newDiv.className='hello';
//Add ID
//newDiv.id='newDiv-ID';
//Add Attribute
//newDiv.setAttribute('title','Hello Div');
//Create text node
//var newDivText=document.createTextNode('Hello World');
//newDiv.appendChild(newDivText);
//newDiv.textContent='Hello world by setting textContent';
//Insert this <div> into DOM
// var container=document.querySelector('.container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// console.log(newDiv);

//+++++ DOM Crash Course 002 END +++++

//+++++ DOM Crash Course 003 START +++++
//Theme of this part: Event

// var button=document.getElementById('button').addEventListener('click',buttonClick);
// function buttonClick(e){
//     console.log("button clicked");
//     console.log(e.target);//element that trigered this click event
//     console.log(e.target.id);

//     console.log(e.clientX);//clientX,Y 是距离浏览器边界的偏移量
//     console.log(e.offsetX);//offsetX,Y是距离e.target元素边界的偏移量

// }

//Different Events
var button=document.getElementById('button');

button.addEventListener('click',runEvent);
button.addEventListener('dblclick',runEvent);//double click
button.addEventListener('mousedown',runEvent);//按下鼠标的瞬间即触发（再松开鼠标之前）

function runEvent(e){
    console.log('Event Type: '+e.type);
}