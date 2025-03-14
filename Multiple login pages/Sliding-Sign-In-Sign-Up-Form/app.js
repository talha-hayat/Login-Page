// Initialization
const supabaseUrl = 'https://yvmfwmiecdsawxvaeajq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2bWZ3bWllY2RzYXd4dmFlYWpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3ODA1NjgsImV4cCI6MjA1NDM1NjU2OH0._DE4SCSVttKMWhJtwkPiyyZ6B3bZosatFq_qlBfaPYw"
const supabasePro = supabase.createClient(supabaseUrl, supabaseKey)

// console.log(supabasePro)



const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


function togglePass(){
  var input = document.querySelector('.password')
  var image = document.getElementById('img')
  if(input.getAttribute('type') == 'password'){
      input.setAttribute('type', 'text')
      image.setAttribute('src','https://cdn1.iconfinder.com/data/icons/general-icons2/128/eye-open2-512.png')
  }else {
     input.setAttribute('type', 'password')
      image.setAttribute('src', 'https://www.svgrepo.com/show/390427/eye-password-see-view.svg')
  }
}

function togglePass_Signup(){
  var input = document.querySelector('.password1')
  var image = document.getElementById('img1')
  if(input.getAttribute('type') == 'password'){
      input.setAttribute('type', 'text')
      image.setAttribute('src','https://cdn1.iconfinder.com/data/icons/general-icons2/128/eye-open2-512.png')
  }else {
     input.setAttribute('type', 'password')
      image.setAttribute('src', 'https://www.svgrepo.com/show/390427/eye-password-see-view.svg')
  }
}

const signUp_NameInp = document.getElementById("signUp-Name")
const signUp_emailInp = document.getElementById("signUp_email")
const signUp_passwordInp = document.getElementById("signUp_password")



// console.log(signUp_NameInp , signUp_passwordInp , signUp_emailInp)

async function signup(){
  const Name = signUp_NameInp.value 
  const Email = signUp_emailInp.value
  const password = signUp_passwordInp.value
  // console.log(Name , Email , password)

  const { data, error } = await supabasePro.auth.signUp({
      email:Email ,
      password:password ,
    })

    // console.log(data)

   const { error : usererror } = await supabasePro
      .from('User')
      .insert({ 
          Name,
          Email
       })


       if(!usererror){
          alert("Signup Successfull")
          // window.location.href = "/home.html"
       }else{
          alert("Signup Failed")
          console.log(error)
       }
}


// SignIn 
let signin_Email = document.getElementById("signIn-Email")
const signin_password = document.getElementById("SignIn_password")
// console.log(signin_Email , signin_password)

async function signIn(){
  const email = signin_Email.value
  let password = signin_password.value
  // console.log(email , password)


const { data, error } = await supabasePro
.auth.signInWithPassword({
  email,
  password
})

if(!error){
  alert("SignIn Successfully")
  signin_Email.innerHTML = ""
}else{
  alert("SignIn UnSuccessful!")
  console.log(error)
}

}
