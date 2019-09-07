
import React, { useState } from 'react';

const Form = (props) => {
  return (<div>
    {props.formData.map(data => {
      if(data.type === "input"){
        const styles = {
          input: {
            width: "100%",
            border: "none",
            fontSize: 20
          }
        }

        return (<div style={{
          width: (data.width === "half") ? "50%" : (data.width === "full") ? "100%" : null,
          display: "inline-block"
        }}>
          <div style={{
            display: "inline",
            marginLeft: (data.width === "half") ? "1%" : 0,
            marginRight: (data.width === "half") ? "1%" : 0,
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
          }}>
            <span>{data.label}</span>
            <input style={styles.input} />
          </div>
        </div>)
      }
    })}
  </div>);
}

const styles = {
}

export default Form;
