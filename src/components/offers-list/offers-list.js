import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import GlobalProps from "../props/props";

const OffersList = ({onMainButtonClick, offers}) => (
  <React.Fragment>
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard key={offer.id} offer={offer} onMainButtonClick={onMainButtonClick} onHandleMouseOver={() => {}}/>
      )}
    </div>
  </React.Fragment>
);

OffersList.propTypes = {
  onMainButtonClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(GlobalProps.OFFER)
};

export default OffersList;
