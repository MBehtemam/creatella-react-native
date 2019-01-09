import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "react-native";
import { Card } from "react-native-elements";
import Actions from "Creatella-business-logic/Shared/components/Ads/Actions";
import State from "Creatella-business-logic/Shared/components/Ads/State";

class MyAdsContainer extends Component {
  state = {
    adsId: null
  };
  componentDidMount() {
    const adsId = `ads-${Date.now()}`;
    this.props.getRandomAdsId(adsId);
    this.setState({ adsId });
  }
  render() {
    const { IDS } = this.props.ads;
    return (
      <Card>
        {IDS.hasOwnProperty(this.state.adsId) && (
          <Image
            source={{
              uri: "http://192.168.1.41:3000/ads?r=" + IDS[this.state.adsId]
            }}
            style={{ width: 320, height: 200 }}
          />
        )}
      </Card>
    );
  }
}
const AdsContainer = connect(
  State,
  Actions
)(MyAdsContainer);
export default AdsContainer;
