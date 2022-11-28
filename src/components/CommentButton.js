import { useState } from "react"
import Comments from "./Comments"

function CommentButton({comments}) {
    const [commentBtn, setCommentBtn] = useState(true)
// console.log(comments.length)
const commentList = comments.map((comment) => (
    <Comments 
        user = {comment.user}
        comment = {comment.comment}
        length = {comments.length}
        commentBtn = {commentBtn}
        
    />

))
    function handleComments() {
        return (
            setCommentBtn(!commentBtn)
        )
    }

    return   (
    <>        
        <button 
            onClick={handleComments}>
            {commentBtn ? "Hide Comments" : "Show Comments"}
        </button>
        <br></br>
        <div>{commentList}</div>
        
    </>    
    )
}

export default CommentButton