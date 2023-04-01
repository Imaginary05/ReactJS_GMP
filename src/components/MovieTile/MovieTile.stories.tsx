import { Story, Meta } from '@storybook/react';
import MovieTile, { MovieTileProps } from './MovieTile';

export default {
    title: 'Components/MovieTile',
    component: MovieTile,
    argTypes: {
        onClick: { action: 'clicked' },
        genres: {
            control: {
                type: 'multi-select',
                options: ['Action', 'Comedy', 'Drama', 'Thriller', 'Horror'],
            },
        },
    },
} as Meta;

const Template: Story<MovieTileProps> = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});
Default.args = {
    movie: {
        id: 0,
        title: 'Example Movie',
        posterUrl: 'https://example.com/movie-poster.jpg',
        releaseYear: '2022',
        genres: ['Action', 'Thriller'],
    },
    onTileClick: () => {},
    onEditClick: () => {},
    onDeleteClick: () => {},
};

export const NoGenres = Template.bind({});
NoGenres.args = {
    movie: {
        id: 1,
        title: 'Example Movie',
        posterUrl: 'https://example.com/movie-poster.jpg',
        releaseYear: '2022',
        genres: [],
    },
    onTileClick: () => {},
    onEditClick: () => {},
    onDeleteClick: () => {},
};
