import React from 'react';
import Counter from './counter';
import { connect } from 'react-redux';

const Counters =(props)=>{
    return (
      <div>
        
         <span>{props.state}</span>
         <div>
          AddCounter<button onClick = {() => props.dispatch({type: "ADDCOUNTER"})}>+</button>
         
          DeleteCounter<button onClick={() => props.dispatch({type: "REMOVECOUNTER"})}>-</button>
        </div>
    {props.state.map((value,key) => (<Counter key={key} value = {key} />))}
      </div>
    )
  }
  const mapStateToProps = (state) =>{
    return {state};
  }
  
  const CountersApp = connect(mapStateToProps)(Counters);
export default CountersApp;