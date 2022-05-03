





const buttonAcceptCookie = document.querySelector(".btOk");
const cookieBlock = document.querySelector(".header-container-botton");

buttonAcceptCookie.addEventListener("click", () =>{
    cookieBlock.style.display = "none"
});


const btnSend = document.querySelector(".main-container-eighth-groupForms__send");
const inputs = document.querySelectorAll(".main-container-eighth-groupForms input");


btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        if(input.value.trim() == ""){
            input.style.borderColor = "red";
            input.style.borderWidth = "2px";
            input.style.transition = "all 0.5s ease-in-out"
            
        }
        else{
            input.style.borderColor = "#5C5C5C"
            input.style.borderWidth = "1px";
        }
    });
    
});