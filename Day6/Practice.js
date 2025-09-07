let email = document.querySelector("#id");

let password = document.querySelector("#password");
let form =  document.querySelector("form");

Form.addEventListener("submit" ,function(dets){
    dets.preventDefault();
    document.querySelector("#emailerror").textContent = "";
    document.querySelector("#passworderror").textContent = "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordand = passwordRegex.text(password.value)

    let isValid = true;
    if(!emailans){
        document.querySelector("#emailerror").textContent="Email is Incorrect";
        document.querySelector("#emailerror").style.display = "initial";
        isValid = false;
    }
    if(!passwordand){
        document.querySelector("#passworderror").textContent="please enter the correct format";
        document.querySelector("#passworderror").style.display = "initial";
        isValid = false;

    }
    if(isValid){
        document.querySelector("#message").textContent = "Form Submitted Successfully";
    }
})