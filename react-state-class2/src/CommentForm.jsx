import { useState } from "react"
import {useFormik} from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty ';
    } 
      return errors;
    };

export default function CommentForm({ addNewComment }){
    // let [formData, setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rating:5,
    // })
    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    // let handleInputData =(event)=>{
    //     setFormData((currData) =>{
    //         return {...currData, [event.target.name] : event.target.value }
    //     })
    // }
    // let handleSubmit = (event) =>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username:"",
    //         remarks:"",
    //         rating:5,
    //     })
        
    // }
    return(
        <div>
          <h4>  give a Comments</h4>
          <form onSubmit={formik.handleSubmit}>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username"
             value={formik.values.username }
             onChange={formik.handleChange}
             id="username" name="username" />
             {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            <br /><br />

            <label htmlFor="remarks">Remarks</label>
            <textarea value={formik.values.remarks} id="ramarks" name="remarks"
            onChange={formik.handleChange}></textarea>
            <br />
            <label htmlFor="rating">Rating</label>
            <input type="number" value={formik.values.rating}
            id="rating" name="rating" onChange={formik.handleChange}
             placeholder="rating" min={1} max={5} />
           <br />
            <button type="submit">Add Comment</button>
          </form>
        </div>
    )

}