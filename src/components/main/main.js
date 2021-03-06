import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../offers-list/offers-list';
import GlobalProps from "../props/props";
import "../map/map";
import Map from "../map/map";

const Main = ({offers, onMainButtonClick}) => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
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
          <OffersList offers={offers} onMainButtonClick={onMainButtonClick}/>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <div id="map" style={{width: `100%`, height: `100%`}}>
              <Map offers={offers}/>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
);

Main.propTypes = {
  offers: PropTypes.arrayOf(GlobalProps.OFFER),
  onMainButtonClick: PropTypes.func.isRequired
};

export default Main;
