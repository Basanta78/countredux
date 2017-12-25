import React from 'react';
import { connect } from 'react-redux';

const counter =(props)=>{
    return (
      <div>
        <h2>Counter</h2>
        <span>{props.state[props.value]}</span>
         <div>
          <button onClick = {() => props.dispatch({type: 'DECREMENT', index:props.value})}>-</button>
         
          <button onClick={() => props.dispatch({type: 'INCREMENT', index:props.value})}>+</button>
        </div> 
      </div>
    )
  }
  const mapStateToProps = (state) =>{
    return {state};
  }
  
  const CounterApp = connect(mapStateToProps)(counter);
  


export default CounterApp;