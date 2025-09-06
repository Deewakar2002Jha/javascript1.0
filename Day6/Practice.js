let email = document.querySelector("#id");

let password = document.querySelector("#password");
let form =  document.querySelector("form");

Form.addEventListener("submit" ,function(dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordand = passwordRegex.text(password.value)
    if(!emailans){
        document.querySelector("#emailerror").textContent="Email is Incorrect";
        document.querySelector(".error").style.display = "initial";
    }
    if(!passwordand){
        document.querySelector("#passworderror").textContent="please enter the correct format"
    }
})