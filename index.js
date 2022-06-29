const likeCount = document.getElementById("like-count");
let likes;
document.getElementById("like-button").addEventListener("click", () => {
    likes += 1;
    renderLikes();
});