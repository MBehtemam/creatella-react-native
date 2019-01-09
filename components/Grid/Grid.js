import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-native-easy-grid";
import ProductContainer from "./ProductContainer";
import AdsContainer from "./AdsContainer";
import { connect } from "react-redux";
import State from "Creatella-business-logic/Shared/components/Grid/State";
import Action from "Creatella-business-logic/Shared/components/Grid/Actions";
class _Grid extends Component {
  componentDidMount() {
    this.props.initialProducts();
  }
  render() {
    let adsCounter = 0;
    return (
      <Grid>
        {this.props.products.map((product, index) => {
          adsCounter++;
          if (adsCounter === this.props.ads.adsPerProduct) {
            adsCounter = 0;
            return (
              <Fragment key={product.id}>
                <Row>
                  <ProductContainer product={product} />
                </Row>
                <Row>
                  <AdsContainer />
                </Row>
              </Fragment>
            );
          } else {
            return (
              <Row key={product.id}>
                <ProductContainer product={product} />
              </Row>
            );
          }
        })}
      </Grid>
    );
  }
}

const MyGrid = connect(
  State,
  Action
)(_Grid);
export default MyGrid;
