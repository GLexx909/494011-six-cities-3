import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

const OffersList = ({onMainButtonClick, offers}) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in Amsterdam</b>
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
              Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
      </ul>
      {/* <select class="places__sorting-type" id="places-sorting">*/}
      {/*  <option class="places__option" value="popular" selected="">Popular</option>*/}
      {/*  <option class="places__option" value="to-high">Price: low to high</option>*/}
      {/*  <option class="places__option" value="to-low">Price: high to low</option>*/}
      {/*  <option class="places__option" value="top-rated">Top rated first</option>*/}
      {/* </select>*/}
    </form>
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <OfferCard key={offer.title} offer={offer} onMainButtonClick={onMainButtonClick} onHandleMouseOver={() => {}}/>
      )}
    </div>
  </section>
);

OffersList.propTypes = {
  onMainButtonClick: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
  )
};

export default OffersList;