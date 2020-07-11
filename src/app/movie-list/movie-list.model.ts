export class MovieList {
  constructor(
    public Search: Search[],
    public totalResults: string,
    public Response: string
  ) { }
}

export class Search {
  constructor(
    public Title: string,
    public Year: string,
    public imdbID: string,
    public Type: string,
    public Poster: string
  ) { }
}