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
        posterPath: 'assets/poster1.png',
        releaseDate: '2022-12-02',
        genres: ['Action', 'Thriller'],
        runtime: 90,
        duration: '1h 30min',
        voteAverage: 8.5,
        overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?',
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
        posterPath: 'assets/poster1.png',
        releaseDate: '2022-12-02',
        genres: [],
        runtime: 80,
        voteAverage: 8.5,
        overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?',
    },
    onTileClick: () => {},
    onEditClick: () => {},
    onDeleteClick: () => {},
};
