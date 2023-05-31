
// import { comments } from "./comments-container.js";
// import { editCommentText } from "./edit-comments.js";
// import { initLikeButtons } from "./like-counter.js";
// import { getDate } from "./date-format.js";
import { renderComments } from "./render-function.js";
import { commentsContainer, addFormButton, addFormName, addFormText, commentsLoader } from "./variables.js";


function getApiFunction() {
    // const commentsLoader = document.querySelector('.comments-loader')
    return fetch('https://webdev-hw-api.vercel.app/api/v1/sergey-bondarenko/comments', {
        method: "GET",
    })
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
            else {
                throw new Error()
            }
        })
        .then((responseData) => {
            const appComents = responseData.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    date: comment.date,
                    text: comment.text,
                    likes: comment.likes,
                    isLiked: false,
                }
            })
            comments = appComents
            renderComments()
        })
        .then(() => {
            commentsLoader.innerHTML = ""
        })
        .catch(() => {
            commentsLoader.innerHTML = 'Проблемы с сервером или отсутствует интернет соединение, попробуйте перезагрузить страницу'
        })
}

function postApiFunction() {
    return fetch('https://webdev-hw-api.vercel.app/api/v1/sergey-bondarenko/comments', {
        method: "POST",
        body: JSON.stringify({
            name: addFormName.value,
            text: addFormText.value,
        })
    })
        .then((response) => {
            // console.log(response);
            if (response.status === 201) {
                return response.json()
            }
            else if (response.status === 400) {
                throw new Error("Ошибка ввода")
            }
            else if (response.status === 500) {
                throw new Error("Ошибка сервера")
            }
            else {
                throw new Error("Ошибка")
            }
        })
        .then(() => {
            return getApiFunction()
        })
        .then(() => {
            addFormButton.disabled = false
            addFormButton.textContent = "Написать"
            addFormName.value = ''
            addFormText.value = ''
        })
        .catch((error) => {
            addFormButton.disabled = false
            if (error.message === "Ошибка ввода") {
                alert('Поле ввода имени должно содержать минимум 3 символа')
            }
            else if (error.message === "Ошибка сервера") {
                alert('Сервер временно недоступен, попробуйте позже')
            }
            else {
                alert('Отсутствует подключение к интернету')
            }
        })
}
export {getApiFunction, postApiFunction}