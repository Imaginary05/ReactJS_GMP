import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import SearchForm, { SearchFormProps } from './SearchForm';

export default {
    title: 'Components/SearchForm',
    component: SearchForm,
} as Meta;

const Template: Story<SearchFormProps> = (args) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        args.onSearch(query);
    };

    return (
        <SearchForm
            {...args}
            onSearch={handleSearch}
            initialQuery={query}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    initialQuery: '',
}
