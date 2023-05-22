import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dialog, { DialogProps } from './Dialog';
import MovieDetails from '../Movie/MovieDetails/MovieDetails';
import { movies } from '../../data/movies';

export default {
    title: 'Components/Dialog',
    component: Dialog,
} as Meta;

const Template: Story<DialogProps> = (args) => (
    <Dialog
        // title={args.title}
        // onClose={args.onClose}
        // children={args.children}
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
        movie={movies[0]}
    ></MovieDetails>)
};
