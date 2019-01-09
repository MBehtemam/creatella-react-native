import React, { Component } from "react";
import { Header } from "react-native-elements";
import Loading from "../Status/Loading";

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{ text: "Creatella Products" }}
        rightComponent={<Loading />}
      />
    );
  }
}
