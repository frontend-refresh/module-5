# Local installation

### Install react

Here below is guide

<img src="install.png" alt="Description of the image" style="border: 1px solid \#000;">



### Install react

Here below is guide for installation

```bash
npm create vite@latest
cd first-react-app
npm install
npm run dev
```



### More default props

```js
export default function Greeter({person="everyone", from="anonymous"}){
    return (
        <>
            <h1>Salem {person}!</h1>
            <h2>--{from} </h2>
        </>
    )
}
```

```js
function App() {
  return (
    <div>
      <Greeter person="Naruto" from="Jiraya"/>
      <Die numSides={20}/>

      <Greeter person="Sakura" from="Tsunade"/>
      <Die />

      <Greeter person="Sasuke" from="Orochimaru"/>
      <Die numSides={10}/>
          
      <Greeter person="Sai"/>
      <Die />
    </div>
  );
}
```


Here below is result 

<img src="example-defprops2.png" alt="Description of the image" style="border: 1px solid \#000;">



### Passing arrays and objects to props

You can also pass arrays and objects to props

```js
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

function App() {
  return (
    <div>
      <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={["a", "b", "c"]}/>
      <ListPicker values={[1, "x", undefined]}/>
    </div>
    );
}
```

Here below is result 

<img src="example-props3.png" alt="Description of the image" style="border: 1px solid \#fff;">





### React conditionals

Here is below example conditional logics outside of `return` function:

```js
export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    const result = num1 === num2 ? "You win xD" : "You lose :(";

    return (
        <div>
            <h2>{result}</h2>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );

}
```

Here below is result 

<img src="example-cond.png" alt="Description of the image" style="border: 1px solid \#fff;">

Here is below example conditional logics outside of `return` function:

```js
export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    return (
        <div>
            <h2>Double Dice</h2>
            {num1 === num2 ? <h3>"You win"</h3> : null}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}
```

Here below is result 

<img src="example-condition2.png" alt="Description of the image" style="border: 1px solid \#fff;">

### Dynamic styles

Here is below example how we can add styles into:

```js
export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    const styles = {color: num1 === num2 ? "green" : "red"};
    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {num1 === num2 && <h3>"You win"</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}
```

Here below is result 

<img src="styles-div.png" alt="Description of the image" style="border: 1px solid \#fff;">

Another way to make only `h2` tag change color:
```js
export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    const styles = {color: num1 === num2 ? "green" : "red"};
    return (
        <div className="DoubleDice">
            <h2 style={styles}>Double Dice</h2>
            {num1 === num2 && <h3>"You win"</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    );
}
```

Here below is result 

<img src="styles-h2.png" alt="Description of the image" style="border: 1px solid \#fff;">


#### Dynamic style output

Here is the way we will have to add styles
```js
export default function Heading( {color = 'olive', text, fontSize }) {
    return <h1 style={{color: color, fontSize: fontSize }}>{text}</h1>;
}
```

! Note that for any CSS property in Javascript, that we pass as props, we will apply camelCase.


### Rendering array with map

Here is the way we will have to add styles
```js
export default function ColorList({colors}) {

    const lis = colors.map(
        (color) => <li>{color}</li>
    );

    return (
        <div>
            <p>Color List</p>
            <ul>{lis}</ul>
        </div>
    );
}
```

Here below is result 

<img src="render-lis.png" alt="Description of the image" style="border: 1px solid \#fff;">



