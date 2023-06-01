import { type Story, type Meta } from '@storybook/react'
import MovieTile, { type MovieTileProps } from './MovieTile'
import { movies } from '../../../data/movies'

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
  argTypes: {
    onClick: { action: 'clicked' },
    genres: {
      control: {
        type: 'multi-select',
        options: ['Action', 'Comedy', 'Drama', 'Thriller', 'Horror']
      }
    }
  }
} as Meta

const Template: Story<MovieTileProps> = (args) => <MovieTile {...args} />

export const Default = Template.bind({})
Default.args = {
  movie: movies[0],
  onTileClick: () => {},
  onEditClick: () => {},
  onDeleteClick: () => {}
}

export const NoGenres = Template.bind({})
NoGenres.args = {
  movie: movies[1],
  onTileClick: () => {},
  onEditClick: () => {},
  onDeleteClick: () => {}
}
