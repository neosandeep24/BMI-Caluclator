import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [height,Setheight]=useState(null);
  const [weight,Setweight]=useState(null);
  const [bmi,Setbmi]=useState(null);
  const [suggest,Setsuggest]=useState('');
  
  useEffect(() => {
    console.log(bmi);
    Setbmi(weight/((height*height)/10000));

});
  function Output(event){
    event.preventDefault(); 
    if(bmi<18.5)
    {
      Setsuggest("UnderWeight");
    }
    else if(bmi>=18.5 && bmi<25)
    {
      Setsuggest("Normal weight");
    }
    else if(bmi>=25 && bmi<30)
    {
      Setsuggest("Overweight");
    }
    else if(bmi>=30 && bmi<35)
    {
      Setsuggest("Overweight Class 1 Obesity");
    }
    else if(bmi>=35 && bmi<40)
    {
      Setsuggest("Overweight Class 2 Obesity");
    }
    else if(bmi>=40)
    {
      Setsuggest("Overweight Class 3 Obesity");
    }
  }
  console.log(weight,height);
  return(
    <div className='App'>

    <form onSubmit={Output} className='card'>
      <h1>Check your BMI</h1>
      <h3>Height in Cm</h3>
      <h3>Weight in Kg</h3>
      <input 
       value={height}
       type='number'
       placeholder='height'
       className='Input'
       onChange={event=>Setheight(parseInt(event.target.value))}
       />
       <br/>
       <input
        value={weight}
        type='number'
        placeholder='weight'
        className='Input'
        onChange={event=>Setweight(parseInt(event.target.value))}
        />
        <br/>

      <button type='submit' className='button'>Submit</button>
      <h1>{suggest}</h1>
    </form>

    </div>
  );
}

export default App;

