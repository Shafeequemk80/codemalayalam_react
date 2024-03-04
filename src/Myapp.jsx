import React from "react";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Homepage from "./Pages/Homepage.jsx";
import DummyPage from "./Pages/DummyPage.jsx";
import Usage from "./Pages/Usage.jsx";


class Myapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }

  handlechange = (value) => {
   
    this.setState({ currentSelected: value });
  };

  getPage() {
    const { currentSelected } = this.state;

    switch (currentSelected) {
      case "home":
        return <Homepage name="" />;
      case "usage":
        return <Usage  />;

      case "settings":
        return <DummyPage key="Settings" name="Settings" />;

      case "logout":
        return <DummyPage key="Logout" name="Logout" />;

      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Header onMenuSelect={this.handlechange} />
        <div className="app-body">{this.getPage()}</div>
        <Footer />
      </div>
    );
  }
}
export default Myapp;
