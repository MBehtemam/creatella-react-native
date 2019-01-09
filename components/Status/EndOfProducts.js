import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import { View, Text } from "react-native";
import State from "Creatella-business-logic/Shared/components/Status/EndOfProducts/State";

class MyEndOfProducts extends Component {
  render() {
    return (
      this.props.endOfProducts && (
        <View>
          <Icon name="rowing" />
          <Text>~ end of catalogue ~</Text>
        </View>
      )
    );
  }
}

const EndOfProducts = connect(
  State,
  {}
)(MyEndOfProducts);
export default EndOfProducts;
