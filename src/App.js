import React, { useState } from 'react';
import './App.css';

function App() {
  const product =[ 
    {name:'Sumsung', Price:10000},
    {name:'Samponi', Price:8000},
    {name:'Vivo 91s', Price:7000}
  ];

  const [count,setCount]=useState(0);
  const btnHandle =()=> setCount(count + 1);

  return (
    <div className="App">
      <header className="App-header">
      <Extra count={count}></Extra>
        <Cart name={product[0].name} price={product[0].Price} btn={btnHandle}></Cart>
        <Cart name={product[1].name} price={product[1].Price} btn={btnHandle}></Cart>
        <Cart name={product[2].name} price={product[2].Price} btn={btnHandle}></Cart>
     
      </header>
    </div>
  );
}

function Cart(popes){
 
  const btnColor ={
    borderRadius:'10px',
    backgroundColor:'LightSeaGreen',
    padding:'10px 15px',
    color:'white'
  };
 
  return (
    <div  >
   
    <div style={{width:'400px',color:'white',backgroundColor:'SlateGray',padding:'20px',borderRadius:'10px',marginTop:'50px'}}>
      <h5 >Product Name: {popes.name}</h5>
      <p >Product Price: {popes.price}</p>
     
      <button onClick={popes.btn} style={btnColor} >Go Buy</button>
    </div>
</div>
  )
}

function Extra(popes){
  return (
   <div>
     <h1 style={{marginBottom:'50px'}}> product count: {popes.count}</h1>
   </div>
  );
}
export default App;
