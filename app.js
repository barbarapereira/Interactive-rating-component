const ratingNumbersDOM = document.querySelectorAll(".card__rating-number");
let activeRatingNumber;
const secondaryCardDOM = document.querySelector(".card--secondary");
const mainCardDOM = document.querySelector(".card--main");
const resultValueDOM = document.querySelector(".card__result-value");
const errorDOM = document.querySelector(".error");

function selectRating(number){
    const selectedRatingNumbersDOM = ratingNumbersDOM[number - 1];
    selectedRatingNumbersDOM.classList.add("card__rating-number--active");
    
    if(activeRatingNumber){
        const ativeRatingDOM = ratingNumbersDOM[activeRatingNumber - 1];
        ativeRatingDOM.classList.remove("card__rating-number--active");        
    }
    activeRatingNumber = number;
}

function submmit(){
    
    if(!activeRatingNumber){
        errorDOM.classList.remove("hide");
        errorDOM.classList.add("showError");
        return
    }
    mainCardDOM.classList.add("hide");
    errorDOM.classList.add("hide");
    secondaryCardDOM.classList.remove("hide");
    resultValueDOM.textContent = activeRatingNumber;


}
