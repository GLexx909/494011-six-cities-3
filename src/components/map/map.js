import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import GlobalProps from "../props/props";

const Map = ({offers, currentOfferId}) => {

  function initializeMap() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offers.forEach((offer) => {
      let iconPin = offer.id === currentOfferId ? iconActive : icon;

      leaflet.marker(offer.cord, {icon: iconPin}).addTo(map);
    });
  }


  if (document.getElementById(`map`)) {

    const container = leaflet.DomUtil.get(`map`);
    if (container !== null) {
      // eslint-disable-next-line camelcase
      container._leaflet_id = null;
    }

    initializeMap();

  } else {
    document.addEventListener(`DOMContentLoaded`, () => {
      initializeMap();
    });
  }

  return true;
};

Map.propTypes = {
  offers: PropTypes.arrayOf(GlobalProps.OFFER),
};

export default Map;
