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
        public id: number,
        public title: string,
        public voteAverage: number,
        public releaseDate: string,
        public posterPath: string,
        public overview: string,
        public genres: Array<string>,
        public runtime: number,
        public tagline?: string,
        public voteCount?: number,
        public budget?: number,
        public revenue?: number,
    ) {
        this.duration = `${Math.floor(this.runtime/60)}h ${this.runtime%60}min`;
    }

    readonly duration?: string;
}
