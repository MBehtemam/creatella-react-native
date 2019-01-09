import React, { Component } from "react";
import State from "Creatella-business-logic/Shared/components/Sort/State";
import Action from "Creatella-business-logic/Shared/components/Sort/Actions";
import { connect } from "react-redux";
import { ButtonGroup } from "react-native-elements";
class MySort extends Component {
  state = {
    selectedIndex: 0
  };
  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
    switch (selectedIndex) {
      case 0:
        this.props.sortById();
        break;
      case 1:
        this.props.sortByPrice();
        break;
      case 2:
        this.props.sortBySize();
        break;
    }
  };
  render() {
    const buttons = ["Id", "Price", "Size"];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 40 }}
      />
    );
  }
}

const Sort = connect(
  State,
  Action
)(MySort);
export default Sort;
