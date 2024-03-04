import React from "react";
import './Tools.css'
import AddNew from "./AddNew";
class Tools extends React.Component {
  render() {
    
    console.log('RENDER TOOLS');
    const { children ,onAction,labelValue,handleRefresh} = this.props;
    const  onlyChild= React.Children.only(children)
    const count= React.Children.count(onlyChild.props.children)
    
    return(
        <div className="list-tools">
        <div className="list-header">
            <select value={labelValue} onChange={onAction} name="status" >
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="Non-Active">Non Active</option>
            </select>
            <AddNew/>

            <button className="Refresh" onClick={handleRefresh}> Refresh</button>
        </div>
        {children}
    <div className="list-footer">
       Total {count} Here
    </div>
        </div>
        );
  }
}
export default Tools;
