import GenreSelect, { GenreSelectProps } from './GenreSelect';
import {
    Meta,
    Story
} from '@storybook/react';
import { useState } from 'react';
import { genres } from '../../../data/genres-list';

export default {
    title: "Components/GenreSelect",
    component: GenreSelect,
} as Meta;

const Template: Story<GenreSelectProps> = (args) => {
    const [selectedGenre, setSelectedGenre] = useState(args.selectedGenre);

    const handleChange = (genre: string) => {
        setSelectedGenre(genre);
        args.onSelect(genre);
    };

    return (
        <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={handleChange}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    genres,
    selectedGenre: genres[0],
};

export const WithSelectedGenre = Template.bind({});
WithSelectedGenre.args = {
    genres,
    selectedGenre: genres[1],
};
