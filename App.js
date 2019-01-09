import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "Creatella-business-logic/Shared/components/Store";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Scroll from "./components/Scroll";
import Grid from "./components/Grid/Grid";
import EndOfProducts from "./components/Status/EndOfProducts";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <Sort />
          <Scroll>
            <Grid />
            <EndOfProducts />
          </Scroll>
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
