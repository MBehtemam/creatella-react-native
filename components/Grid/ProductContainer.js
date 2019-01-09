import React, { Component } from "react";
import { Card, Button } from "react-native-elements";
import { Text, View, StyleSheet } from "react-native";

export default class ProductContainer extends Component {
  render() {
    const { id, price, date, face, size } = this.props.product;
    console.log(price);
    return (
      <Card>
        <View style={style.productFace}>
          <Text style={{ fontSize: size, color: "#F50057" }}>{face}</Text>
        </View>
        <Text style={style.date}>{date}</Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          borderRadius={50}
          fontWeight="bold"
          fontSize={20}
          backgroundColor="#212121"
          title={price}
        />
      </Card>
    );
  }
}

const style = StyleSheet.create({
  productFace: {
    textAlign: "center",
    width: "100%",
    // backgroundColor: "#cccccc",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  date: {
    textAlign: "center",
    fontSize: 16
  }
});
