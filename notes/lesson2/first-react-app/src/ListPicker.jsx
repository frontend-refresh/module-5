export default function ListPicker({values}){
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx];

    return (
        <div>
            <p>The list of values will be {values}</p>
            <p>The random element is {randElement}</p>
        </div>
    );
}