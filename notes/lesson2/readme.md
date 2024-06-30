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

```
export default function Greeter({person="everyone", from="anonymous"}){
    return (
        <>
            <h1>Salem {person}!</h1>
            <h2>--{from} </h2>
        </>
    )
}
```

```
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


