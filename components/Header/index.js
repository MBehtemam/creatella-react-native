import React, { Component } from "react";
import { Header } from "react-native-elements";
class AppHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{ text: "Products", style: { color: "#fff" } }}
      />
    );
  }
}
export default AppHeader;
