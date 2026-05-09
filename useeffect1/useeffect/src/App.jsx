// import react, { useState, useEffect } from 'react';
// function App() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''

//   });
//   // useEffect

//   useEffect(() =>{
//     console.log("Form data has been updated:", formData);

//   },[formData])

//   // input change
// }
import react,{useState,useEffect} from 'react'

export const App = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <br/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
