// import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let obj = {
    name: "Ashish",
    age: 22,
  }

  let arr = [1,2,3,4,5]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
      Hello Rohit, Tailwind chal gaya!
    </h1>
    <Card username = "Rohit" btn = "Click me" myObj = {obj} myArr = {arr}/>
    <Card username= "Amit" btn = "visit me" />
    </>
  )
}

export default App
