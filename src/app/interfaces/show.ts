export interface Show {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  poularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface PaginatedShow {
  page: number;
  results: Show[];
  total_pages: number;
  total_results: number;

}
