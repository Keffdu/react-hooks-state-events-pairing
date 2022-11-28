import {useState} from "react"

function Votes({ upVotes, downVotes }) {
    // console.log(upVotes, downVotes)
    const [likes, setLikes] = useState(upVotes)
    const [dislikes, setDislikes] = useState(downVotes)

    function handleUpVote() {
        setLikes((likes) => likes + 1)
        
    }
    
    function handleDownVote() {
        setDislikes((dislikes) => dislikes + 1)
        
    }
    
    return (
        <div>
            <button onClick={handleUpVote} >{likes} 👍</button>
            <button onClick={handleDownVote} >{dislikes} 👎</button>
        </div>
    )
}


export default Votes; 