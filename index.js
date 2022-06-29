
// searchBtn

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("food-form");

// likeButtonCount
let countLikes = document.getElementById('like-count')

let likeButton = document.getElementById('like-button')




searchBtn.addEventListener("click", () => {
    let foodName = foodForm.value;
    let finalURL =
        console.log(finalURL);

    //fecth url
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {

            result.innerHTML = ` `
        })
        .catch(() => {
            if (foodName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid food name </h3>`;
            }
        });
});


let integer = 0;

likeButton.addEventListener('click', () => {
    integer += 1
    countLikes.innerHTML = `${integer} likes`;
})