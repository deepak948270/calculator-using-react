import React, { useState } from "react";
import Display from "./components/Display";
import Keys from "./components/keys";
import styles from "./App.module.css";
import Container from "./components/Container";

const App = () => {
  let title="calculator";
 const [calValue,setCalValue]= useState("");

 const onButtonClickHandler=(value)=>{
  if(value==="c"){
    setCalValue("");
  }
  else if(value === "="){
   let calculatedResult=eval(calValue);
   setCalValue(calculatedResult);
  }
  else{
    const newDisplayText= calValue + value;
    console.log(newDisplayText);
    setCalValue(newDisplayText);
  }

 }
  return (
    <div>
      <h1 className={styles.heading}>{title.toUpperCase()} using react-js</h1>

      {/* using container component as the wrapper for wrapping the other components */}
      <Container>
        <Display dispalyCalValue={calValue} />
        <Keys onButtonClick={onButtonClickHandler}/>
      </Container>
    </div>
  );
};

export default App;
