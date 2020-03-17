import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import GlobalProps from "../props/props";

const OfferCard = ({onMainButtonClick, onHandleMouseOver, offer: {id, title, price, src, premium, housingType, rating}}) => {

  const ratingCounting = () => {
    const roundRating = Math.round(rating);
    return roundRating * 20;
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={onHandleMouseOver}>
      { premium && <div className="place-card__mark"><span>Premium</span></div> }
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
          <Link to={`/dev-offer/${id}`} className="place-card__link" onClick={onMainButtonClick} data={id} >{title}</Link>
        </h2>
        <p className="place-card__type">{housingType}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  // index: PropTypes.number.isRequired,
  onMainButtonClick: PropTypes.func.isRequired,
  onHandleMouseOver: PropTypes.func.isRequired,
  offer: GlobalProps.OFFER
};

export default OfferCard;
