import React, { Component } from "react";
import { Header } from "react-native-elements";
import Loading from "../Status/Loading";

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor="#AD1457"
        centerComponent={{
          text: "Creatella Products",
          style: { color: "#ffffff", fontSize: 20 }
        }}
        rightComponent={<Loading />}
      />
    );
  }
}
