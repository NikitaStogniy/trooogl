export interface IPlanet {
  type: "planet"; // Добавлено поле type
  climate: string;
  created: Date;
  diameter: number;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: number;
  population: number;
  residents: string[];
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
}

export interface IPeople {
  type: "people"; // Добавлено поле type
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IFilm {
  type: "film"; // Добавлено поле type
  characters: string[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  title: string; // Changed from 'name' to 'title' for consistency with API
  url: string;
  vehicles: string[];
}

export interface IStarship {
  type: "starship"; // Добавлено поле type
  MGLT: number;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: Date;
  crew: number;
  edited: Date;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
}

export interface IVehicle {
  type: "vehicle"; // Добавлено поле type
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: Date;
  crew: number;
  edited: Date;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  pilots: string[];
  films: string[];
  url: string;
  vehicle_class: string;
}

export interface ISpecies {
  type: "species"; // Добавлено поле type
  average_height: number;
  average_lifespan: number;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
}

export interface CardProps {
  name: string;
  url: string;
  type: string;
  id: string;
}

export interface MultiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: (IPlanet | IPeople | IFilm | IStarship | IVehicle | ISpecies)[];
}

export type Type =
  | "planets"
  | "people"
  | "vehicle"
  | "film"
  | "species"
  | "starships";

export type DataResponse =
  | IPlanet
  | IPeople
  | IFilm
  | IStarship
  | IVehicle
  | ISpecies;
