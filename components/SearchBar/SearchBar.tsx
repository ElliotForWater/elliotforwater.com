import React, { Fragment, FunctionComponent, useState } from 'react'
import fetchJsonp from 'fetch-jsonp'
import classnames from 'classnames'
import styles from './SearchBar.module.css'
import SearchIcon from '../../public/images/svg/search.svg'

const suggestURL =
  'https://suggest.finditnowonline.com/SuggestionFeed/Suggestion?format=jsonp&gd=SY1002042&q='

export const SearchBar: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('')
  const [suggestedWords, setSuggestedWords] = useState([])

  async function showSuggestedWords(event) {
    setSearchValue(event.target.value)

    try {
      const res = await fetchJsonp(`${suggestURL}${searchValue}`)
      const suggestedWordsArray = await res.json()
      setSuggestedWords(suggestedWordsArray[1])
      return
    } catch {
      console.log('error')
    }
  }

  return (
    <Fragment>
      <form className={styles.form}>
        <input
          name="q"
          type="text"
          className={styles.input}
          onChange={showSuggestedWords}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          //id="search_query"
          placeholder="Every search gives water..."
        />
        <button className={styles.button} type="submit">
          <img
            src="/images/svg/search.svg"
            alt="search icon"
            className={styles.icon}
          />
          <SearchIcon width={14} height={14} />
        </button>
      </form>
      {suggestedWords.length !== 0 && (
        <ul className={styles.autosuggestResults} id="autosuggest-results">
          {suggestedWords.map((word, i) => (
            <li
              className={classnames(styles.autosuggestWord, {
                [styles.highlight]: [i === 1]
              })}
            >
              <img
                src="/images/svg/search.svg"
                alt="search icon"
                className={styles.icon}
              />{' '}
              {word}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  )
}

export default SearchBar
