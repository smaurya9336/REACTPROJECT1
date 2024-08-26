import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullname:"",
        username:"",
        password:"",
    });

    let handleInputChange =(event)=>{
       let fieldName= event.target.name;
       let newValue=event.target.value;

       setFormData((currData)=>{
        return {...currData,
            [event.target.name]:event.target.value };
       })
    }
let handleSubmit=(event)=>{
    event.preventDefault();
    setFormData({
        fullname:"",
        username:"",
        password:"",
    })

}
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" placeholder="enter full name"
             value={formData.fullname} 
             onChange={handleInputChange}
             id="fullname" 
             name="fullname" />
            <br/>
             <br />
             <label htmlFor="username">User Name</label>
            <input type="text" placeholder="enter user name"
             value={formData.username} 
             onChange={handleInputChange}
             id="username"
             name="username" />
             <br/>
             <br />
             <label htmlFor="password">Password</label>
            <input type="password" placeholder="enter password"
             value={formData.password} 
             onChange={handleInputChange}
             id="password"
             name="password" />
             
            <button type="submit">Submit</button>
        </form>
    ) 
}