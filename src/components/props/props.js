import PropTypes from "prop-types";

export default {
  OFFER: PropTypes.shape({
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
    }),
    cord: PropTypes.array
  }),
};
