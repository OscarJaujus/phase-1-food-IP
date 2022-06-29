

let countLikes = document.getElementById('like-count')

let likeButton = document.getElementById('like-button')




let integer = 0;

likeButton.addEventListener('click', () => {
    integer += 1
    countLikes.innerHTML = `${integer} likes`;
})