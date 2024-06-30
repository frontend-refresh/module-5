import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'

function App() {
  return (
    <div>
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
    /*
    <div>
      <Greeter person="Naruto" from="Jiraya"/>
      <Greeter person="Sakura" from="Tsunade"/>
      <Greeter person="Sasuke" from="Orochimaru"/>
    </div>
    */
  );
}

export default App
