function handleSubmit(event){
    event.preventDefault();
    console.log("form was submit");
}

export default function from(){
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>submit</button>
        </form>
          
            </>
    )
}