var object=new Object()
var test=false
var myinfo={}

const form = document.getElementById("form");
const username = document.getElementById("username").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const password2 = document.getElementById("password2").value
object.username=username
object.password2



//show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  //small will do change the small tag in HTML
  const small = formControl.querySelector("small");
  small.innerText = message;
}
//show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check for valid email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}
//check length of input
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be at less than ${max} characters`)
    }else {
        showSuccess(input);
    }

}
//get fieldName
function getFieldName(input){
    return input.id;
}
//check required 
function checkRequired(inputArray){
    inputArray.map(input =>{
        // console.log(input.value)
        if(input.value.trim() === ''){
            showError(input,`${input.id} is required`)
        }else{
            showSuccess(input);
        }
    })
}
//check for password match
function checkPassword(input1,input2){
    if(input1.value!==input2.value){ 
        showError(input2,'Password did not matched');
    }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

   checkRequired([username,email,password,password2]);
   checkLength(username,3,15);
   checkLength(password,6,25);
   checkEmail(email); 
   checkPassword(password,password2);