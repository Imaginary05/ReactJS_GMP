export interface MovieData {
    id: number;
    title: string;
    tagline?: string;
    vote_average: number;
    vote_count?: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget?: number;
    revenue?: number;
    genres: Array<string>;
    runtime: number;
}

export default class Movie {
    constructor(
        public movie: MovieData
    ) {
        this.id = this.movie.id;
        this.title = this.movie.title;
        this.posterPath = this.movie.poster_path;
        this.releaseDate = this.movie.release_date;
        this.genres = this.movie.genres;
        this.runtime = this.movie.runtime;
        this.voteAverage = this.movie.vote_average;
        this.overview = this.movie.overview;
        this.tagline = this.movie.tagline;
        this.voteCount = this.movie.vote_count;
        this.budget = this.movie.budget;
        this.revenue = this.movie.revenue;

        this.duration = `${Math.floor(this.runtime/60)}h ${this.runtime%60}min`;
    }

    readonly id: number;
    readonly title: string;
    readonly posterPath: string;
    readonly releaseDate: string;
    readonly genres: Array<string>;
    readonly runtime: number;
    readonly voteAverage: number;
    readonly overview: string;
    readonly tagline?: string;
    readonly voteCount?: number;
    readonly budget?: number;
    readonly revenue?: number;
    readonly duration?: string;
}
