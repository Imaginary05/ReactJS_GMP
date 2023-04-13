import React from 'react';
import { Story, Meta } from '@storybook/react';
import MovieForm, { MovieFormProps } from './MovieForm';
import { Movie } from '../MovieTile/MovieTile';

export default {
    title: 'Components/MovieForm',
    component: MovieForm,
} as Meta;

const Template: Story<MovieFormProps> = (args) => <MovieForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSubmit: (formData) => console.log(formData),
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
    movie: {
        id: 0,
        title: 'The Shawshank Redemption',
        posterUrl: 'https://www.example.com/shawshank-redemption.jpg',
        releaseYear: '1994-10-14',
        genres: ['Drama'],
        duration: 142,
        rating: 8.5,
        description:
            'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    onSubmit: (formData: Movie) => console.log(formData),
};
