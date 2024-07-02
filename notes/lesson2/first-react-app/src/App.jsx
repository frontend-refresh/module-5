import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import ShoppingListItem from "./ShoppingListItem";
import ShoppingList from './ShoppingList'

const data = [
  {item: "eggs", quantity: 12, completed: false },
  {item: "milk", quantity: 1, completed: true },
  {item: "chicken breasts", quantity: 4, completed: false },
  {item: "carrots", quantity: 6, completed: true },
];

function App() {
  return (
    <div>
      <ShoppingList items={data}/>
    </div>

    /*
    <div>
      <Heading color="magenta" text="welcome!" fontSize="20px"/>
      <Heading color="teal" text="welcome2!" fontSize="48px"/>

      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>

      <ColorList colors={["red", "pink", "purple", "teal"]}/>
      <ColorList colors={["olive", "orangered", "saltegrey"]}/>

    </div>
    <div>
    
      <ListPicker values={[1, 2, 3]}/>
      <ListPicker values={["a", "b", "c"]}/>

     <Greeter person="Naruto" from="Jiraya"/>
      <Die numSides={20}/>

      <Greeter person="Sakura" from="Tsunade"/>
      <Die />

      <Greeter person="Sasuke" from="Orochimaru"/>
      <Die numSides={10}/>
          
      <Greeter person="Sai"/>
      <Die />
    </div>
    */
  );
}

export default App
