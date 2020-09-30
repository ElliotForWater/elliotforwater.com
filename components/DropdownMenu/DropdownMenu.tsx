import React, { FunctionComponent, useState } from 'react'
import styles from './Header.module.css'

export const Header: FunctionComponent = () => {
  return (
    <header>
      <div className="header">
        <div class="header__top_row">
          <partial name="_DefaultHeader" />
        </div>
        @if (controller.Equals("SEARCH")){' '}
        {
          <div class="header__bottom_row">
            <partial
              name="../Search/_RequestTypeMenu.cshtml"
              model="searchQuery.ToString()"
            />
          </div>
        }
      </div>
    </header>
  )
}

export default Header
