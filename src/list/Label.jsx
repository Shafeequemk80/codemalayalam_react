import React, { useState } from "react";
import { useContext } from "react";
import { Mycontext,Mynewcontext } from "../Pages/Homepage";


import "./Label.css";


function Label(props) {
  console.log('RENDER LABEL')
  const newf = useContext(Mycontext);
  const value =useContext(Mynewcontext)

  const styles = props.isActive
    ? { background: "green" }
    : { background: "orange" };
  if (newf == false) {
    return null;
  }
  return (
    <span
      onClick={() => {
        props.onAction(props.isActive ? "Active" : "Non-Active");
      }}
      className="list-label-item"
      style={styles}
    >
      {props.isActive ? "Active" : "No Active"}
    </span>
  );
}
export default Label;
