import {Category} from "../Category/Category";

export interface Movie {
  id: number;
  name: string;
  release_year: number;
  description: string;
  director: string;
  duration: number;
  rating: number;
  poster: string;
  category: Category[];
}
