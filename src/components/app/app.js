import React from 'react';
import Main from "../main/main";
import PropTypes from "prop-types";

const App = ({offers}) => <Main offers={offers} onMainButtonClick={() => `true`}/>;

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired
  )
};

export default App;
