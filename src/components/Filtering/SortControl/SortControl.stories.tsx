import SortControl, { type SortControlProps } from './SortControl'
import {
  type Meta,
  type Story
} from '@storybook/react'
import { useState } from 'react'
import { options } from '../../../data/sort-options'

export default {
  title: 'Components/SortControl',
  component: SortControl
} as Meta

const Template: Story<SortControlProps> = (args) => {
  const [currentSelection, setCurrentSelection] = useState(args.selectedOption)

  const handleSelectionChange = (newSelection: string) => {
    setCurrentSelection(newSelection)
    args.onOptionChange(newSelection)
  }

  return <SortControl
        {...args}
        selectedOption={currentSelection}
        onOptionChange={handleSelectionChange} />
}

export const Default = Template.bind({})
Default.args = {
  options,
  selectedOption: 'Release Date'
}
