import React from "react";
import { Story, Meta } from "@storybook/react";
import MovieDetails, { MovieDetailsProps } from "./MovieDetails";
import { movies } from '../../../data/movies';

export default {
    title: "Components/MovieDetails",
    component: MovieDetails,
} as Meta;

const Template: Story<MovieDetailsProps> = (args) => <MovieDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    movie: movies[0],
};
