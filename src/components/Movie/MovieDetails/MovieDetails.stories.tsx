import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieDetails, { MovieDetailsProps } from "./MovieDetails";

export default {
    title: "Components/MovieDetails",
    component: MovieDetails,
} as Meta;

const Template: Story<MovieDetailsProps> = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    movie: {
        id: 0,
        posterPath: "assets/poster1.png",
        title: "Movie Title",
        releaseDate: '1994-10-14',
        genres: [],
        voteAverage: 8.5,
        runtime: 120,
        overview: "Movie overview goes here.",
    },
};
