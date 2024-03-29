import {Offers} from '../types/offers';

export const offers: Offers = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude:  4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['WI-FI','Heating','Kitchen','Fridge', 'Waching machine', 'Towels'],
    host: {
      avatarUrl: '../img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Angelina',
    },
    id: 1,
    images: ['../img/room.jpg','../img/apartment-01.jpg','../img/apartment-02.jpg','../img/apartment-03.jpg','../img/studio-011.jpg'],
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude:  4.85309666406198,
      zoom: 10},
    maxAdults: 4,
    previewImage: '../img/apartment-01.jpg',
    price: 120,
    rating: 1.8,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['WI-FI','Heating','Kitchen','Fridge', 'Waching machine', 'Towels'],
    host: {
      avatarUrl: '../img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['../img/room.jpg','../img/apartment-01.jpg','../img/apartment-02.jpg','../img/apartment-03.jpg','../img/studio-01.jpg','../img/apartment-011.jpg'],
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10},
    maxAdults: 6,
    previewImage: '../img/room.jpg',
    price: 80,
    rating: 5,
    title: 'Wood and stone place',
    type: 'Private room',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['WI-FI','Heating','Kitchen','Fridge', 'Waching machine', 'Towels'],
    host: {
      avatarUrl: '../img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 3,
    images: ['../img/room.jpg','../img/apartment-01.jpg','../img/apartment-02.jpg','../img/apartment-03.jpg','../img/studio-01.jpg','../img/apartment-011.jpg'],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10},
    maxAdults: 6,
    previewImage: '../img/apartment-02.jpg',
    price: 132,
    rating: 3.8,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['WI-FI','Heating','Kitchen','Fridge', 'Waching machine', 'Towels'],
    host: {
      avatarUrl: '../img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 4,
    images: ['../img/room.jpg','../img/apartment-01.jpg','../img/apartment-02.jpg','../img/apartment-03.jpg','../img/studio-01.jpg','../img/apartment-011.jpg'],
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10},
    maxAdults: 6,
    previewImage: '../img/apartment-03.jpg',
    price: 180,
    rating: 4.8,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['WI-FI','Heating','Kitchen','Fridge', 'Waching machine', 'Towels'],
    host: {
      avatarUrl: '../img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 5,
    images: ['../img/room.jpg','../img/apartment-01.jpg','../img/apartment-02.jpg','../img/apartment-03.jpg','../img/studio-01.jpg','../img/apartment-011.jpg'],
    isPremium: true,
    location: {
      latitude: 48.856373,
      longitude: 2.353016,
      zoom: 10},
    maxAdults: 6,
    previewImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
    price: 180,
    rating: 4.8,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Hotel Paris',
  },
];

