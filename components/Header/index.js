import React, { Component } from "react";
import { Header } from "react-native-elements";
import Sort from "../Sort";

export default class MyHeader extends Component {
  render() {
    return <Header centerComponent={{ text: "Creatella Products" }} />;
  }
}
