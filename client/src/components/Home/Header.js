import React, { Component } from "react";
import Navbar from "./Nav/Nav";
import TopNav from "./Nav/TopNav";
import NavSearch from "./Nav/NavSearch";


const HeaderArea = ({ children }) => {
  return <header className="header-area">{children}</header>;
};

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  revealSearch = () => {
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {

    return (
      <HeaderArea>
        <NavSearch active={this.state.active} />
        <TopNav />
        <Navbar revealSearch={this.revealSearch} />
      </HeaderArea>
    );
  }
}
