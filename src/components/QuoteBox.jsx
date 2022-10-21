import React from 'react';
import quotes from './quotes.json'
import { useState } from 'react';
const QuoteBox = () => {

    const [IndexQuote, setIndexQuote] = (useState(Math.floor(Math.random() * quotes.length))) 

    const randomquote=()=>{
        setIndexQuote(Math.floor(Math.random() * quotes.length))
    }

    let colors=[]
    
if (colors.length < Infinity) {
        let color = Math.floor(Math.random()* 500)+100;

    colors.push(`#${color}`);
    
}

 const randomcolor= Math.floor(Math.random() * colors.length)
 document.body.style= `background: ${colors[randomcolor]}`
console.log(colors);
    return (
        <div className='quotebox'>
            <i style={{color:`${colors[randomcolor]}`}} class="fa-solid fa-quote-left"></i>
            <div style={{color:`${colors[randomcolor]}`}} className='quote'>{quotes[IndexQuote].quote}
            <h2>{quotes[IndexQuote].author}</h2></div>
            <button onClick={randomquote}><i style={{color:`${colors[randomcolor]}`}} class="fa-solid fa-shuffle"></i></button>


        </div>
    );
};

export default QuoteBox;