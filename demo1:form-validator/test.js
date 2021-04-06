//改用querySelector
const form = document.querySelector('.form');
const username = document.querySelector('#username');
const usernameInGetElementByID=document.getElementById('username');
//console.log("username got by querySelector:"+username);
//console.log("username got by getElementByID:"+usernameInGetElementByID);

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//Show input error message，每一个form input都会调用此函数设置提示文本
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    //innerText读取的是指定元素标签内的文本值，所以这里是根据错误类型赋值对应的<small>标签
    small.innerText = message;
}
// Show success outline
function showSuccess(input) {
    const formControl=input.parentElement;
    formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
    //校验邮箱格式的正则表达式
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    console.log(inputArr);
    inputArr.forEach(function(input){
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
        return isRequired;
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get fieldname
function getFieldName(input) {
    //console.log('getFieldName:'+input.id.charAt(0).toUpperCase() + input.id.slice(1));
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!checkRequired([username,email,password,password2])){
        checkLength(username,3,25);
        checkLength(password,6,25);
        checkEmail(email);
        checkPasswordsMatch(password,password2);
    }
});