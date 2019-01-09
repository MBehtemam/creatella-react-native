import React, { Component } from "react";
import { ScrollView } from "react-native";
import State from "Creatella-business-logic/Shared/components/Scroll/State";
import Action from "Creatella-business-logic/Shared/components/Scroll/Actions";
import { connect } from "react-redux";
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

class MyScroll extends Component {
  render() {
    return (
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            this.props.loadMoreProducts();
          }
        }}
        scrollEventThrottle={400}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}
const Scroll = connect(
  State,
  Action
)(MyScroll);
export default Scroll;
