import React from "react";
import { render, screen } from '@testing-library/react';
import MovieDetails from "./MovieDetails";

describe("MovieDetails", () => {
    const movie = {
        id: 0,
        title: "Movie Title",
        posterUrl: "https://example.com/image.jpg",
        releaseYear: 2022,
        genres: [],
        rating: 8.5,
        duration: 120,
        description: "Movie description goes here.",
    };
    const onClick = jest.fn();

    afterEach(() => {
        onClick.mockClear();
    });

    it("should render movie poster image", () => {
        render(<MovieDetails movie={movie}  onDetailsClosed={()=>{}}/>);

        const posterImage = screen.getByAltText(movie.title);

        expect(posterImage).toBeInTheDocument();
        expect(posterImage.getAttribute("src")).toBe(movie.posterUrl);
    });

    it("should render movie title", () => {
        render(<MovieDetails movie={movie}  onDetailsClosed={()=>{}}/>);

        const movieTitle = screen.getByText(movie.title);

        expect(movieTitle).toBeInTheDocument();
    });

    it("should render movie year", () => {
        render(<MovieDetails movie={movie}  onDetailsClosed={()=>{}}/>);

        const movieYear = screen.getByText(`${movie.releaseYear}`);

        expect(movieYear).toBeInTheDocument();
    });

    it("should render movie rating", () => {
        render(<MovieDetails movie={movie}  onDetailsClosed={()=>{}}/>);

        const movieRating = screen.getByText(`${movie.rating}`);

        expect(movieRating).toBeInTheDocument();
    });

    it("should render movie duration", () => {
        render(<MovieDetails movie={movie}  onDetailsClosed={()=>{}}/>);

        const movieDuration = screen.getByText(`${Math.floor(movie.duration/60)}h ${movie.duration%60}min`);

        expect(movieDuration).toBeInTheDocument();
    });

    it("should render movie description", () => {
        render(<MovieDetails movie={movie}  onDetailsClosed={()=>{}}/>);

        const movieDescription = screen.getByText(movie.description);

        expect(movieDescription).toBeInTheDocument();
    });
});
