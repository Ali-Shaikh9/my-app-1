import React from 'react'

function Alert(props) {

    const capitalize = (text) => {
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
      return (
        <div style={{height : "36px"}}>
      {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
        </div>}
        </div>
      )
    }
    
    export default Alert