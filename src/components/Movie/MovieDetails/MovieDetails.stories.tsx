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
        posterUrl: "https://example.com/image.jpg",
        title: "Movie Title",
        releaseYear: '2022',
        genres: [],
        rating: 8.5,
        duration: 120,
        description: "Movie description goes here.",
    },
};
