import React from 'react';
import PropTypes from 'prop-types';

const OfferCard = ({onMainButtonClick, onHandleMouseOver, offer: {title, price, src, premium, housingType, rating}, index}) => {

  const ratingCounting = () => {
    const roundRating = Math.round(rating);
    return roundRating * 20;
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={onHandleMouseOver}>
      { premium ? <div className="place-card__mark"><span>Premium</span></div> : null }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingCounting() + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" className="place-card__link" onClick={onMainButtonClick} data={index} >{title}</a>
        </h2>
        <p className="place-card__type">{housingType}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  index: PropTypes.number.isRequired,
  onMainButtonClick: PropTypes.func.isRequired,
  onHandleMouseOver: PropTypes.func.isRequired,
  offer: PropTypes.shape({
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
  })
};

export default OfferCard;
