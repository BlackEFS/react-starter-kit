import React, { useState } from "react";


function App() {
  let number=20;
  let [data,setData]=useState(10);
  const setNumber=()=>{
    number=30
   
    setData("Enes")
  }
  const showNumberValues=()=>{
    console.log("data",data);
    console.log("number",number);
  }
  return (
    <>
      <header className="App-header">
        <button onClick={setNumber} >Sayı Değiştir</button>
        <button onClick={()=>{showNumberValues()} } >Sayı Değerlerini göster</button>
        <br />
        {data}
        <br />
        {number}
      </header>
    </>
  );
}

export default App;
