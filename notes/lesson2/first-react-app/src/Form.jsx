function handleFormSubmit(evt) {
    evt.preventDefault;
    console.log("SUBMITTED THE FORM!!!");
  }
  

export default function Form(){
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <button>Submit</button>
            </form>
        </div>
      );
}