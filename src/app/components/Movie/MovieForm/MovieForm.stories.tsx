import React from 'react'
import { type Story, type Meta } from '@storybook/react'
import MovieForm, { type MovieFormProps } from './MovieForm'
import Movie from '../movie'
import { movies } from '../../../data/movies'

export default {
  title: 'Components/MovieForm',
  component: MovieForm
} as Meta

const Template: Story<MovieFormProps> = (args) => <MovieForm {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const WithInitialValues = Template.bind({})
WithInitialValues.args = {
  movie: movies[0]
}
