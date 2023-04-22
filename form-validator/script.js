const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, errorMessage){
    input.classList.add("is-invalid");
    const div = input.nextElementSibling;
    div.innerText = errorMessage;
    div.className = 'invalid-feedback';
};
function success(input){
    input.classList.add("is-valid"); 
};

function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value === ""){
            error(input, `${input.id} gerekli`);
        } else {
            success(input);
        }
    });
};

function checkLength(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} en az ${min} karakter olmalıdır.`);
    }
    else if(input.value.length > max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır.`);
    }
    else{
        success(input);
    }
}

function checkPasswords(input1,input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor.')
    }
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,repassword]);
    checkLength(username,7,15)
    checkLength(password,5,25)
    checkPasswords(password,repassword)
});