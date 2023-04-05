import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

describe("MovieDetails", () => {
    const movie = {
        imageUrl: "https://example.com/image.jpg",
        name: "Movie Title",
        releaseYear: 2022,
        rating: 8.5,
        duration: 120,
        description: "Movie description goes here.",
    };

    it("should render movie poster image", () => {
        render(<MovieDetails movie={movie} />);
        const posterImage = screen.getByAltText(movie.name);
        expect(posterImage).toBeInTheDocument();
        expect(posterImage.getAttribute("src")).toBe(movie.imageUrl);
    });

    it("should render movie title and year", () => {
        render(<MovieDetails movie={movie} />);
        const movieTitle = screen.getByText(movie.name);
        expect(movieTitle).toBeInTheDocument();
        const movieYear = screen.getByText(`(${movie.releaseYear})`);
        expect(movieYear).toBeInTheDocument();
    });

    it("should render movie rating and duration", () => {
        render(<MovieDetails movie={movie} />);
        const movieRating = screen.getByText(`Rating: ${movie.rating}`);
        expect(movieRating).toBeInTheDocument();
        const movieDuration = screen.getByText(`Duration: ${movie.duration} mins`);
        expect(movieDuration).toBeInTheDocument();
    });

    it("should render movie description", () => {
        render(<MovieDetails movie={movie} />);
        const movieDescription = screen.getByText(movie.description);
        expect(movieDescription).toBeInTheDocument();
    });
});
