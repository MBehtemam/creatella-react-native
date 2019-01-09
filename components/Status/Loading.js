import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View, Text } from "react-native";
import State from "Creatella-business-logic/Shared/components/Status/Loading/State";
class MyLoading extends Component {
  render() {
    return (
      this.props.isFetching && (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    );
  }
}
const Loading = connect(
  State,
  {}
)(MyLoading);
export default Loading;
