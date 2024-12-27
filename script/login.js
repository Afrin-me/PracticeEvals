

let loginform = document.getElementById('loginform');
loginform.addEventListener('submit',function(event){
  event.preventDefault()
   

    let email = loginform.email.value
    let password = loginform.password.value
 console.log(email, password);
    if(email=="empher@gmail.com" && password=="empher@123"){
        alert("Login Success, directing to quiz page")

        window.location.href = "quiz.html"
        
    }else{
        alert("something went wrong in login")
    }
})