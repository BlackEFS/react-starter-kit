import React from "react";
import './App.css'


export default function App() {
  return (    
      <>
          <h1>React Dersleri</h1>
          <Hosgeldiniz  isim="Enes"/>
      </>
  );
}


function Hosgeldiniz(props) {
  console.log(props)
  return <div>HoşGeldiniz </div>
}