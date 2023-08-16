import React from 'react'
import './appStyle.css';
import styles from './my-style.module.css';

 function AppStyle() {
    const myStyle={
        color:"white",
        backgroundColor:"DodgerBlue",
        padding:"10px",
        fontFamily:"Sans-Serif"
        };
  return (
   <React.Fragment>
    <div className="text-color">
        <p>Text color should be red. Its coming from external css file</p>
    </div>


    <h1 style={{backgroundColor:"red"}}>Hello Style!</h1>
      <p style={{backgroundColor:"green"}}>Add a little style using inline css</p>

     <h6 style={myStyle}>Styling using js object</h6>

     <h5 className={styles.mod}>Styling using module css</h5>
   </React.Fragment>
  )
}

export default AppStyle;