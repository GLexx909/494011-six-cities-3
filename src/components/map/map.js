import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import GlobalProps from "../props/props";

const Map = ({offers}) => {

  const cordsArray = offers.map((a) => a.cord);

  document.addEventListener(`DOMContentLoaded`, () => {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
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

    cordsArray.forEach((item) => {
      leaflet
        .marker(item, {icon})
        .addTo(map);
    });
  });

  return true;
};

Map.propTypes = {
  offers: PropTypes.arrayOf(GlobalProps.OFFER),
};

export default Map;
