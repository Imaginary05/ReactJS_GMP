import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export interface SearchFormProps {
  initialQuery: string
  onSearch: (query: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({
  initialQuery,
  onSearch
}) => {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()
  const handleQueryChange = (value: string): void => {
    setQuery(value)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleSearch = (): void => {
    onSearch(query)

    if (query) {
      router.push(`movies?&search=${query}&searchBy=title`)
    }
  }

  return (
       <div className='searchComponent'>
           <div className='searchText'>
               FIND YOUR MOVIE
           </div>
           <div className='searchForm'>
               <Input
                   value={initialQuery}
                   placeholder="What do you want to watch?"
                   onChange={handleQueryChange}
                   onKeyUp={handleKeyUp}
               ></Input>
               <Button
                   title={'Search'.toUpperCase()}
                   onClick={handleSearch}
               ></Button>
           </div>
       </div>
  )
}

export default SearchForm
