const newDate = (...props) => {
  const options = {year: `numeric`, month: `long`, day: `numeric`};
  return new Date(...props).toLocaleDateString(`en-En`, options);
};

export default [
  {
    id: 1,
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
    },
    cord: [52.3909553943508, 4.85309666406198],
    reviews: [
      {
        id: 1,
        authorName: `Max`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 4,
        date: `${newDate(2011, 1, 28)}`
      },
      {
        id: 2,
        authorName: `Lana`,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        rating: 5,
        date: `${newDate(2012, 1, 28)}`
      }
    ]
  },
  {
    id: 2,
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
    },
    cord: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        id: 3,
        authorName: `Nina`,
        text: `The building is green and from 18th century.`,
        rating: 4,
        date: `${newDate(2013, 1, 28)}`
      },
      {
        id: 4,
        authorName: `Andrey`,
        text: `Lorem go go go, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        rating: 5,
        date: `${newDate(2014, 1, 28)}`
      }
    ]
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    src: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this
                  alley flowery and colorful.`,
    premium: false,
    housingType: `Apartment`,
    rating: 4.3,
    bedrooms: `1 Bedrooms`,
    guestsNumber: `Max 2 adults`,
    householdItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    owner: {
      image: `img/avatar-angelina.jpg`,
      name: `Kate`,
      isSuper: true
    },
    cord: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        id: 5,
        authorName: `Katia`,
        text: `Hello. The building is green and from 18th century.`,
        rating: 4,
        date: `${newDate(2015, 1, 28)}`
      },
      {
        id: 6,
        authorName: `Vadim`,
        text: `Go go go, but ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        rating: 3,
        date: `${newDate(2016, 1, 28)}`
      }
    ]
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    src: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this
                  alley flowery and colorful.`,
    premium: true,
    housingType: `Apartment`,
    rating: 4.9,
    bedrooms: `3 Bedrooms`,
    guestsNumber: `Max 6 adults`,
    householdItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    owner: {
      image: `img/avatar-angelina.jpg`,
      name: `Lena`,
      isSuper: false
    },
    cord: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        id: 7,
        authorName: `Efanasiy`,
        text: `Counter Strike. The building is green and from 18th century.`,
        rating: 5,
        date: `${newDate(2019, 1, 28)}`
      },
      {
        id: 8,
        authorName: `Klara`,
        text: `Ruby on Rails, but dolore magna aliqua.`,
        rating: 2,
        date: `${newDate(2018, 1, 28)}`
      }
    ]
  },
];
