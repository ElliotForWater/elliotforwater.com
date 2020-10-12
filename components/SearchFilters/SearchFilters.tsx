import React, { FC } from 'react'
// import styles from './SearchFilters.module.css'

const SearchFilters: FC = () => {
  return (
    <header>
      <div className='header'>
        <div className='header__top_row'>{/* <partial name="_DefaultHeader" /> */}</div>
        {/* @if (controller.Equals("SEARCH")){' '} */}
        <div className='header__bottom_row'>
          {/* <partial
              name="../Search/_RequestTypeMenu.cshtml"
              model="searchQuery.ToString()"
            /> */}
        </div>
      </div>
    </header>
  )
}

export default SearchFilters
