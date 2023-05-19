import React from 'react'
import { type Story, type Meta } from '@storybook/react'
import Counter, { type CounterProps } from './Counter'

export default {
  title: 'Components/Counter',
  component: Counter
} as Meta

const Template: Story<CounterProps> = (args) => <Counter {...args} />

export const Default = Template.bind({})
Default.args = {
  initialCount: 0
}

export const WithCustomValue = Template.bind({})
WithCustomValue.args = {
  initialCount: 5
}
