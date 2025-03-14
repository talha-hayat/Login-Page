function togglePass(){
    var input = document.getElementById('password')
    var image = document.getElementById('img')

    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
        image.setAttribute('src','https://cdn1.iconfinder.com/data/icons/general-icons2/128/eye-open2-512.png')
    }else {
       input.setAttribute('type', 'password')
        image.setAttribute('src', 'https://www.svgrepo.com/show/390427/eye-password-see-view.svg')
    }
}



function submit(){
    var email = document.getElementById('username').value
    var pass = document.getElementById('password').value 
    // console.log(email,pass)

    if(!email || !pass){
        alert('required fields are missing')
        
    } 
    //  return

    var isValid = email.indexOf('@gmail.com')

    if(isValid == -1){
        alert('Email-id is incomplete')
    }


    if(email === 'talhahayat9999@gmail.com' && pass === 'admin123'){
        window.location.href = './home.html'
    }else{
        alert('invalid email and password')
    }





    if(password.value.length <= 8){
    alert('password must be 8 Character')
    }










}