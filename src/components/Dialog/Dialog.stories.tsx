import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dialog, { DialogProps } from './Dialog';
import MovieDetails from '../Movie/MovieDetails/MovieDetails';
import { genres } from '../../data/genres-list';

export default {
    title: 'Components/Dialog',
    component: Dialog,
} as Meta;

const Template: Story<DialogProps> = (args) => (
    <Dialog
        title={args.title}
        onClose={args.onClose}
        children={args.children}
    ></Dialog>
);

export const Default = Template.bind({});
Default.args = {
    title: 'Dialog Title',
    onClose: () => console.log('close button clicked'),
    children: (<p>This is the dialog body content</p>),
};

export const MovieDetail = Template.bind({});
MovieDetail.args = {
    title: '',
    onClose: () => console.log('close button clicked'),
    children: (<MovieDetails
        movie={{
            id: 0,
            title: 'Test Movie',
            posterPath: 'assets/poster1.png',
            releaseDate: '2022-01-01',
            genres: [genres[1]],
            runtime: 90,
            voteAverage: 7.5,
            overview: 'Test overview',
        }}
    ></MovieDetails>)
};
