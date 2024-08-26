import { useState } from "react"
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment(){
    let [comments, setComments] = useState([{
        username:"@gsk",
        remarks:"good job",
        rating:4,
    }])

   let addNewComment = (comment) =>{
     setComments((currComments) =>[...currComments, comment]);
    }
    return(
        <>
        <div>
        <h3>All Comments</h3>
        {
        comments.map((comment, idx) =>
            (
              <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
             &nbsp;
           <span>(rating = {comment.rating})</span>
               <p>{comment.username}</p>
             </div>
        ))}
      </div>
    
        <hr />
        <CommentForm addNewComment={addNewComment} />
        </>
    )
}