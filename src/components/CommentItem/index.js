import './index.css'

import {formatDistanceToNow} from 'date-fns'

const newtime = formatDistanceToNow(new Date())

const CommentItem = props => {
  const {eachCommentDetails, onLiked, onDeleteCommenteItem} = props
  const {name, comment, isLiked, id} = eachCommentDetails
  const nameSlice = name.slice(0, 1)

  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const color = isLiked ? '' : 'liked'

  const onClikedLikeButton = () => {
    onLiked(id)
  }

  const onDeleteComment = () => {
    onDeleteCommenteItem(id)
  }

  return (
    <li>
      <div className="name-time-container">
        <div>
          <h1 className="slice">{nameSlice}</h1>
        </div>
        <h1 className="name-heading">{name}</h1>
        <p className="time">{newtime}</p>
      </div>
      <p className="write-comment">{comment}</p>
      <div className="like-delete-container">
        <button
          className="button-like"
          type="button"
          onClick={onClikedLikeButton}
        >
          <img src={likedImgUrl} alt="like" className="like-image" />
          <p className={`like-text ${color}`}>Like</p>
        </button>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
            data-testid="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
