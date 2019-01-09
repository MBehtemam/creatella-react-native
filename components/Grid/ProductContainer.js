import React, { Component } from "react";
import { Card, Button } from "react-native-elements";
import { Text, View, StyleSheet } from "react-native";

export default class ProductContainer extends Component {
  render() {
    const { id, price, date, face, size } = this.props.product;
    return (
      <Card>
        <View style={style.productFace}>
          <Text style={{ fontSize: size, color: "#F50057" }}>{face}</Text>
        </View>
        <Text>{date}</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          backgroundColor="#880E4F"
          title={`Buy ${price}`}
        />
      </Card>
    );
  }
}

const style = StyleSheet.create({
  productFace: {
    textAlign: "center",
    fontSize: 40,
    width: "100%",
    backgroundColor: "#cccccc",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  face: {}
});
