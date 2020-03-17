import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import GlobalProps from "../props/props";

class Map extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  initializeMap() {
    if (document.getElementById(`map`)) {
      const {offers} = this.props;

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
        let iconPin = offer.id === this.props.currentOfferId ? iconActive : icon;

        leaflet.marker(offer.cord, {icon: iconPin}).addTo(map);
      });
    }

  }

  componentDidMount() {
    this.initializeMap();
  }

  componentWillUnmount() {
    if (document.getElementById(`map`)) {
      const container = leaflet.DomUtil.get(`map`);
      // eslint-disable-next-line camelcase
      container._leaflet_id = null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentOfferId !== this.props.currentOfferId) {
      if (document.getElementById(`map`)) {
        const container = leaflet.DomUtil.get(`map`);
        // eslint-disable-next-line camelcase
        container._leaflet_id = null;
      }

      this.initializeMap();
    }
  }

  render() {
    return true;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(GlobalProps.OFFER),
  currentOfferId: PropTypes.number
};

export default Map;
