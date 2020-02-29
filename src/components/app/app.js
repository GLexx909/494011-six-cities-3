import React, {PureComponent} from 'react';
import Main from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferDetailedInfo from "../offer-detailed-info/offer-detailed-info";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentOfferIndex: -1,
    };
  }

  handleOfferTitleClick(event) {
    const offerIndex = event.target.getAttribute(`data`);
    this.setState({currentOfferIndex: offerIndex});
  }

  _renderApp() {
    const {offers} = this.props;
    const index = this.state.currentOfferIndex;

    if (index === -1) {
      return (
        <Main offers={offers} onMainButtonClick={this.handleOfferTitleClick.bind(this)}/>
      );
    }

    return this._renderOfferDetailedInfo();
  }

  _renderOfferDetailedInfo() {
    const {offers} = this.props;
    const index = this.state.currentOfferIndex;
    const offer = offers[index];

    if (index !== -1) {
      return (
        <OfferDetailedInfo offer={offer}/>
      );
    }
    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            {this._renderOfferDetailedInfo()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        housingType: PropTypes.string.isRequired,
        guestsNumber: PropTypes.string.isRequired,
        bedrooms: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        premium: PropTypes.bool.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        householdItems: PropTypes.arrayOf(PropTypes.string),
        owner: PropTypes.shape({
          image: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired,
        })
      }).isRequired
  )
};
