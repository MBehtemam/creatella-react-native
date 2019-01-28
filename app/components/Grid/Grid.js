import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import ProductContainer from "./ProductContainer";
import AdsContainer from "./AdsContainer";
import { connect } from "react-redux";
import State from "../Creatella-business-logic/Shared/components/Grid/State";
import Action from "../Creatella-business-logic/Shared/components/Grid/Actions";
class _Grid extends Component {
  componentDidMount() {
    this.props.initialProducts();
  }
  render() {
    let adsCounter = 0;
    return this.props.products.map((product, index) => {
      adsCounter++;
      if (adsCounter === this.props.ads.adsPerProduct) {
        adsCounter = 0;
        return (
          <Fragment key={product.id}>
            <ProductContainer key={product.id} product={product} />
            <AdsContainer key={index} />
          </Fragment>
        );
      } else {
        return <ProductContainer key={product.id} product={product} />;
      }
    });
  }
}

const MyGrid = connect(
  State,
  Action
)(_Grid);
export default MyGrid;
