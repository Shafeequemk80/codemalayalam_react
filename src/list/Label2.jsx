import React from "react";
import "./Label.css";
import { Mycontext,Mynewcontext } from "../Pages/MyContext";
class Label2 extends React.Component {

  render() {
    const props = this.props;
    const styles = props.isActive
      ? { background: "green" }
      : { background: "orange" };
    return (
      <Mycontext.Consumer>
        {(value) => {
          

          if (value == false) {
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
        }}
      </Mycontext.Consumer>
    );
  }
}

Label2.contextType= Mynewcontext
export default Label2;
