const formOpenBtn =document.querySelector("#form-open"),
formContainer =document.querySelector(".form-container"),
formClosebtn=document.querySelector(".close");


formOpenBtn.addEventListener("click",() =>formContainer.classList.add("show"));
formClosebtn.addEventListener("click",() =>formContainer.classList.remove("show"));




