export type Offers = Offer[];

export type Offer = {
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  };
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}


