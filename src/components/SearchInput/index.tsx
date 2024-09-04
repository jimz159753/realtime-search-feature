import React from 'react'
import { SearchInputProps } from './Search.interface'

function SearchInput({ handleChange, value }: SearchInputProps) {
    return (
        <input
            className='border border-current border-gray-500 h-8 mt-20 text-center'
            placeholder='username'
            type='text'
            onChange={handleChange}
            value={value} />
    )
}

export default SearchInput