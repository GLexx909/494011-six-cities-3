import React from 'react';
import Main from "../main/main";
import PropTypes from "prop-types";

const App = ({rentalOffersCount, rentalOffersTitles}) => <Main rentalOffersCount={rentalOffersCount} rentalOffersTitles={rentalOffersTitles}/>;

App.propTypes = {
  rentalOffersCount: PropTypes.number,
  rentalOffersTitles: PropTypes.arrayOf(PropTypes.string)
};

App.defaultProps = {
  rentalOffersCount: 0
};

export default App;
