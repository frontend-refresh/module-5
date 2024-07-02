function handleClick() {
    console.log("CLICKED THE BUTTON!!!");
  }
  
  export default function Clicker() {
    return (
      <div>
        <p>Hover Over Me</p>
        <button onClick={handleClick}>Click</button>
      </div>
    );
  }
  