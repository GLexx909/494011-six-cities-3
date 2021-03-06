import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import GlobalProps from "../props/props";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";

const OfferDetailedInfo = ({offer: {id, title, price, images, description, premium, housingType, rating, bedrooms, guestsNumber, householdItems, reviews, owner: {image, name, isSuper}}, offers, onMainButtonClick}) => {

  const otherOffers = offers.filter((offer) => offer.id !== id);

  const _renderPremium = () => {
    if (premium) {
      return (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      );
    }
    return null;
  };

  const ratingCounting = () => {
    return Math.round(rating);
  };

  const ownerClasses = () => {
    const classes = `property__avatar-wrapper user__avatar-wrapper`;
    if (isSuper) {
      return classes + ` property__avatar-wrapper--pro`;
    } else {
      return classes;
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((imageSrc, index) =>
                <div key={imageSrc + index} className="property__image-wrapper">
                  <img className="property__image" src={imageSrc} alt="Photo studio"/>
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {_renderPremium()}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: (ratingCounting() * 20) + `%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ratingCounting()}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{housingType}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms}</li>
                <li className="property__feature property__feature--adults">{guestsNumber}</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {householdItems.map((item) => (
                    <li key={item} className="property__inside-item">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={ownerClasses()}>
                    <img className="property__avatar user__avatar" src={image} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{name}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <div id="map" style={{width: `100%`, height: `100%`}}>
              <Map offers={offers} currentOfferId={id}/>
            </div>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={otherOffers} onMainButtonClick={onMainButtonClick}/>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferDetailedInfo.propTypes = {
  offers: PropTypes.arrayOf(GlobalProps.OFFER),
  offer: GlobalProps.OFFER,
  onMainButtonClick: PropTypes.func.isRequired
};

export default withRouter(OfferDetailedInfo);
