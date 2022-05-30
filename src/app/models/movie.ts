import { Ratings } from "./ratings";

export interface Movie {
  Title: string;
  Actors: string;
  Plot: string;
  Ratings: Array<Ratings>;
  Poster: string;
}