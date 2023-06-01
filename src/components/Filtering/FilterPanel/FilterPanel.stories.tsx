import {
  type Meta,
  type Story
} from '@storybook/react'
import React, { useState } from 'react'
import { genres } from '../../../data/genres-list'
import FilterPanel, { type FilterPanelProps } from './FilterPanel'
import SortControl from '../SortControl/SortControl'
import { options } from '../../../data/sort-options'
import GenreSelect from '../GenreSelect/GenreSelect'

export default {
  title: 'Components/FilterPanel',
  component: FilterPanel
} as Meta

const Template: Story<FilterPanelProps> = (args) => {
  const [activeGenre, setGenreSelect] = useState(args.activeGenre)
  const [sortCriterion, setSortByOptionSelect] = useState(args.sortCriterion)

  const handleGenreSelect = (genre: string) => {
    setGenreSelect(genre)
    args.onGenreSelect(genre)
  }

  const handleSortByOptionSelect = (criterion: string) => {
    setSortByOptionSelect(criterion)
    args.onSortByOptionSelect(criterion)
  }

  return (
        <div className='navigation'>
            <nav className='filters'>
                <GenreSelect
                    genres={genres}
                    selectedGenre={activeGenre}
                    onSelect={handleGenreSelect}
                ></GenreSelect>
                <SortControl
                    options={options}
                    selectedOption={sortCriterion}
                    onOptionChange={handleSortByOptionSelect}
                ></SortControl>
            </nav>
            <hr/>
        </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  genres,
  sortOptions: options,
  activeGenre: genres[0],
  sortCriterion: options[0]
}

// export const WithSelectedGenre = Template.bind({});
// WithSelectedGenre.args = {
//     genres,
//     sortOptions,
//     activeGenre,
//     sortCriterion,
//     onGenreSelect,
//     onSortByOptionSelect,
// };
