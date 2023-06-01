import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SortControl from './SortControl'
import { options } from '../../../data/sort-options'

describe('SortControl', () => {
  const onChangeMock = jest.fn()

  it('renders the SortControl with the default value', () => {
    render(
            <SortControl
                options={options}
                selectedOption={options[0]}
                onOptionChange={onChangeMock} />
    )
    const select = screen.getByLabelText('Sort by')

    expect(select.value).toBe(options[0])
  })

  it('triggers the onChange callback when a new option is selected', () => {
    render(
            <SortControl
                options={options}
                selectedOption={options[1]}
                onOptionChange={onChangeMock} />
    )
    const select = screen.getByLabelText('Sort by')

    fireEvent.change(select, { target: { value: options[0] } })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(options[0])
  })
})
