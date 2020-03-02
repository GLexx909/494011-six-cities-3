import React, {PureComponent} from 'react';
import Main from "../main/main";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferDetailedInfo from "../offer-detailed-info/offer-detailed-info";
import GlobalProps from '../props/props';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {offers} = this.props;
    return <Main offers={offers} onMainButtonClick={() => {}}/>;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={ ({match}) => this._renderApp(match) }
          />
          <Route
            exact={true}
            path="/dev-offer/:id"
            render={({match}) => {
              const {id} = match.params;
              const {offers} = this.props;
              const offer = offers[id];
              return <OfferDetailedInfo offer={offer}/>;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(GlobalProps.OFFER)
};
