import { comments } from "./api.js";
import { renderComments } from "./render-function.js";

export const initLikeButtons = () => {
    const likeButtonElements = document.querySelectorAll('.like-button')
    const likeCountElements = document.querySelectorAll('.likes-counter')
    for (const likeButtonElement of likeButtonElements) {
        likeButtonElement.addEventListener('click', (e) => {
            e.stopPropagation()
            const comment = comments[likeButtonElement.dataset.index]
            comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes + 1
            comment.isLiked = !comment.isLiked
            renderComments()
        })
    }
}