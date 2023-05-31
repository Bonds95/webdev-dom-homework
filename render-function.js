
import { commentsContainer} from "./variables.js";
import { comments } from "./comments-container.js";
import { editCommentText } from "./edit-comments.js";
import { initLikeButtons } from "./like-counter.js";
import { getDate } from "./date-format.js";


export const renderComments = () => {
    const commentsHtml = comments.map((comment, index) => {
        return `<li class="comment" data-index="${index}">
        <div class="comment-header">
          <div class="comment-name" data-index="${index}">${comment.name
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")}</div>
          <div>
            ${getDate(comment.date)}
            </div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text
                .replaceAll("&", "&amp;")
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll('"', "&quot;")}
            </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
          </div>
        </div>
      </li>`
    })
        .join('')
    commentsContainer.innerHTML = commentsHtml
    initLikeButtons()
    editCommentText()
}