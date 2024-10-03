import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    word = word.toLowerCase();
    return word[0].toUpperCase()+word.slice(1);
  }
  return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            {/* {props.alert.msg} */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
  )
}
