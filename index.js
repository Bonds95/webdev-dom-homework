"use strict";
// Код писать здесь
import { getDate } from "./date-format.js";
import { addFormButton, addFormName, addFormText, commentsLoader } from "./variables.js";
import { renderComments } from "./render-function.js";
import { getApiFunction, postApiFunction } from "./api.js";

commentsLoader.innerHTML = "Комментарии загружаются"

getApiFunction()

getDate()

renderComments()

addFormButton.addEventListener('click', () => {
    addFormName.classList.remove('error')
    addFormText.classList.remove('error')
    if (addFormName.value === "") {
        return addFormName.classList.add('error')
    }
    if (addFormText.value === "") {
        return addFormText.classList.add('error')
    }
    addFormButton.disabled = true
    addFormButton.textContent = "Отправка"
    postApiFunction()




    // comments.push(
    //   {
    //     name: addFormName.value
    //       .replaceAll('<', '&lt')
    //       .replaceAll('>', '&gt'),
    //     date: getDate(),
    //     text: addFormText.value
    //       .replaceAll('<', '&lt')
    //       .replaceAll('>', '&gt'),
    //     likes: 0,
    //     isLiked: false,
    //   }
    // )


    renderComments()
    // initLikeColor()
    // initLikeButtons()


})

console.log("It works!");