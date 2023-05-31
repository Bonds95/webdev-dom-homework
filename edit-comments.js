import { comments } from "./comments-container.js";


export const editCommentText = () => {
    const commentElements = document.querySelectorAll('.comment')
    for (const comment of commentElements) {
        comment.addEventListener('click', () => {
            const index = comment.dataset.index
            const userName = comments[index].name
            const text = comments[index].text
            addFormText.value = `>${text} \n${userName}, `
        })
    }

}