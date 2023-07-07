var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var btn_register = document.getElementById('btn-register');
var users =[]


if(window.localStorage.getItem('name')){
btn_register.addEventListener('click',function (e) {
    e.preventDefault();
    window.localStorage.setItem('name','youssef')
    var x = setTimeout(function () {
        
    // console.log('hii');
    window.location.assign(`login.html`)
        
    }, 2000);
})
}else{
    
}