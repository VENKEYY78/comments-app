import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

/*
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here  */

const initialCommentsList = []

class Comments extends Component {
  state = {
    commentsList: initialCommentsList,

    name: '',
    comment: '',
  }

  addNameAndComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: true,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onEnterComment = event => {
    this.setState({comment: event.target.value})
  }

  onLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isLiked: !eachContact.isLiked}
        }
        return eachContact
      }),
    }))
  }

  onDeleteCommenteItem = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    //  console.log(name)

    return (
      <div className="app-container">
        <h1 className="comment-heading">Comments</h1>
        <div className="input-comment-container">
          <div className="input-container">
            <form className="from-container" onSubmit={this.addNameAndComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                value={name}
                placeholder="Your Name"
                className="input-name"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                placeholder="Your Comment"
                className="comment-box"
                onChange={this.onEnterComment}
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
          </div>

          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <hr />

        <p className="count-comments">
          <span className="count">{commentsList.length}</span> Comments
        </p>

        <ul className="comments-list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              eachCommentDetails={eachComment}
              key={eachComment.id}
              onLiked={this.onLiked}
              onDeleteCommenteItem={this.onDeleteCommenteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
