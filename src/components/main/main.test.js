import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";
import {BrowserRouter} from "react-router-dom";

const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    src: `img/apartment-01.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this
                  alley flowery and colorful.`,
    premium: true,
    housingType: `Apartment`,
    rating: 4.5,
    bedrooms: `2 Bedrooms`,
    guestsNumber: `Max 4 adults`,
    householdItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    owner: {
      image: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true
    }
  },
  {
    title: `Wood and stone place`,
    price: 80,
    src: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this
                  alley flowery and colorful.`,
    premium: false,
    housingType: `Room`,
    rating: 4.1,
    bedrooms: `0 Bedrooms`,
    guestsNumber: `Max 1 adults`,
    householdItems: [`Wi-Fi`, `Towels`, `Heating`, `Coffee machine`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    owner: {
      image: `img/avatar-angelina.jpg`,
      name: `Linda`,
      isSuper: false
    }
  }
];

it(`<Main/> should render component`, () => {
  const tree = renderer
  .create(
      <BrowserRouter>
        <Main offers={offers} onMainButtonClick={() => {}}/>
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
