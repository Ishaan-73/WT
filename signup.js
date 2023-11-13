function validateForm(thisForm){
    var name = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var pwd = document.getElementById('pwd');
    var pwdError = document.getElementById('pwdError');

    return (
        isNotEmpty(name.value,name,nameError,"Enter a name please!") &&
        isValidName(name.value,name,nameError,"Enter a valid Name!") &&
        isValidEmail(email.value,email,emailError,"Enter a valid Email!") &&
        isValidPassword(pwd.value,pwd,pwdError,"Enter a valid Password!")
    );
}
function validateForm2(thisForm){
    var email = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var pwd = document.getElementById('pwd');
    var pwdError = document.getElementById('pwdError');

    return (
        isValidEmail(email.value,email,emailError,"Enter a valid Email!") &&
        isValidPassword(pwd.value,pwd,pwdError,"Enter a valid Password!")
    );
}

function showMessage(isValid,inputEle,errElm,errMsg){
    if(!isValid){
        if(errElm!==null && errElm!== undefined && errMsg !== null && errMsg!==undefined){
            errElm.innerHTML= errMsg;
        }
        if(inputEle!==null && inputEle!==undefined){
            errElm.className = "error";
        }
    }
    else{
        if(errElm!==undefined && errElm!==null){
            errElm.innerHTML = "";
        }
        if(inputEle!==null && inputEle!==undefined){
            errElm.className = "";
        }
    }
}
function isNotEmpty(input,inputEle,errElm,errMsg){
    var isValid = (input!==null && input!==undefined && input.trim()!=="");
    showMessage(input,inputEle,errElm,errMsg);

    return isValid;
}
function isValidName(input,inputEle,errElm,errMsg){
    var isValid = ((input.trim().match(/[A-Za-z ]/))!==null);
    showMessage(input,inputEle,errElm,errMsg);

    return isValid;
}

function isValidEmail(input,inputEle,errElm,errMsg){
    var isValid = ((input!==null) &&(input!==undefined) && (input.trim().match(/^\w+[.]\w+@learner\.manipal\.(edu|in)$/)!==null));
    showMessage(isValid,inputEle,errElm,errMsg);
    
    return isValid;
}

function isValidPassword(input,inputEle,errElm,errMsg){
    var isValid = ((input!==null) && (input!==undefined) && (input.trim().match(/^\w{6,10}$/)!==null));
    showMessage(isValid,inputEle,errElm,errMsg);

    return isValid;
}


function goToSignUp() {
    var secondPageUrl = 'signup.html'
    window.location.href = secondPageUrl;
}
function goToLogin() {
    var secondPageUrl = 'login.html'
    window.location.href = secondPageUrl;
}