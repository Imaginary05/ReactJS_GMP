import { fireEvent, render, screen } from '@testing-library/react'
import { genres } from '../../../data/genres-list'
import React from 'react'
import FilterPanel from './FilterPanel'
import { options } from '../../../data/sort-options'

describe('FilterPanel', () => {
  it('should render genre select and sort control components', () => {
    render(
            <FilterPanel
                genres={genres}
                sortOptions={options}
                activeGenre={genres[0]}
                sortCriterion={options[0]}
                onGenreSelect={() => {}}
                onSortByOptionSelect={() => {}}
            ></FilterPanel>
    )

    const genreSelectComponent = screen.getByTestId('genre-select')
    const sortControlComponent = screen.getByTestId('sort-control')

    expect(genreSelectComponent).toBeInTheDocument()
    expect(sortControlComponent).toBeInTheDocument()
  })
})
