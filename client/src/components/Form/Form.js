import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <>
      <input className="form-control mt-2" {...props} />
    </>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success" type="submit">
      {props.children}
    </button>
  );
}