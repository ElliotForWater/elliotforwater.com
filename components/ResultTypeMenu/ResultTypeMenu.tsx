import React, { FC } from 'react'
// import styles from './ResultTypeMenu.module.css'

const ResultTypeMenu: FC = () => {
  return (
    <header>
      <div className='header'>
        <div className='header__top_row'>{/* <partial name="_DefaultHeader" /> */}</div>
        {/* @if (controller.Equals("SEARCH")){' '} */}
        <div className='header__bottom_row'>{/* add tabs images/video/map/.. */}</div>
      </div>
    </header>
  )
}

export default ResultTypeMenu
