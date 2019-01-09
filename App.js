import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "Creatella-business-logic/Shared/components/Store";
import Expo from "expo";
import Header from "./components/Header";
import Sort from "./components/Sort";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <Sort />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
