import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies(query: string, page: number): Promise<FetchMoviesResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const config = {
    params: { query, page },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get<FetchMoviesResponse>(BASE_URL, config);

  return response.data;
}
