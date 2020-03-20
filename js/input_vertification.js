const input = document.querySelectorAll(".form__input");
const button = document.querySelector(".form__button");
const error_text = document.querySelectorAll(".form__error_text");
const error_text_email = document.querySelector(".form__error_text_email");
const error_icon = document.querySelectorAll(".form__error_icon");


button.onclick = ()=>{
    let i;
    for(i = 0; i < input.length; i++){
        // if input is empty do something
        if(input[i].value.length == 0){
            input[i].classList.add("input_error");
            error_text[i].style.opacity = "1";
            error_icon[i].style.opacity = "1";
        }
        // if input has something inside of it do something
        else{
            input[i].classList.remove("input_error");
            error_text[i].style.opacity = "0";
            error_icon[i].style.opacity = "0";
        }
        // Email validity check
        // If email is invalid format do this
        if(input[2].checkValidity() == false){
            input[2].classList.add("input_error");
            error_text_email.style.opacity = "1";
            error_icon[2].style.opacity = "1";

        }
        // if valid format do this
        else{
            error_text_email.style.opacity = "0";
        }
    }
    //Needs to return false to not reload the page
    return false;
}
