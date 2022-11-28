
function Comments({user, comment, length, commentBtn}) {
    // console.log(comments)
    if (commentBtn === true) {
   return  (
    <div>
        <h3>{length} Comments</h3>
        <h4>{user}</h4>
        <p>{comment}</p>
    </div>
   )} else {
    return null
   }
}

export default Comments