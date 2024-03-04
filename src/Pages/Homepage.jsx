import React from "react";
import Tools from "../list/Tools.jsx";
import SimpleList from "../list/SimpleList.jsx";
import JustInfo from "./JustInfo.jsx"
import { Mycontext, Mynewcontext } from "./MyContext.jsx";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeState: "all",
      message: "",
      showLabel: true,
    };
  }

  onListCahnge = (e) => {
    const value = e.target.value;

    this.setState({
      activeState: value,
    });
  };

  handleDelete = (item) => {
  
    const newArr = this.state.data.filter((Element) => item !== Element);
    this.setState({
      data: newArr,
    });
  };
  onLabelclick = (arg) => {
    this.setState({
      activeState: arg,
    });
  };

  componentDidMount() {

    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ data: data });
      });
  }
  handleRefresh = () => {

    fetch("./data2.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ data: data });
      });
  };
  componentDidUpdate(prevProps, prevstate) {
    if (prevstate.message !== this.state.message) {
      this.setState({ message: "message" });
    }
    
  }
  componentWillUnmount() {
   
  }

  handleshowLabel = (evt) => {
    this.setState({
      showLabel: evt.target.checked,
    });
  };
  render() {
    console.log('RENDER HOME');
    const { data, activeState } = this.state;

    const newArr = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "Active") {
        return item.isActive == true;
      }
      if (activeState === "Non-Active") {
        return item.isActive == false;
      }
      return false;
    });
    return (
      <div>
        <div>
          <input
            checked={this.state.showLabel}
            onChange={this.handleshowLabel}
            type="checkbox"
          />
          showLabel
        </div>
        
      <Mynewcontext.Provider value={100}>

      
        <Mycontext.Provider value={this.state.showLabel}>
        <Tools
          labelValue={activeState}
          handleRefresh={this.handleRefresh}
          onAction={this.onListCahnge}
        >
          <SimpleList
            data={newArr}
            onLabelclick={this.onLabelclick}
            onAction={this.handleDelete}
          />
            
        </Tools>
        <JustInfo activeState={activeState} />
        </Mycontext.Provider>
        </Mynewcontext.Provider>
      </div>
      
    );
  }
}
export default Homepage;
