import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import fetchJsonp from 'fetch-jsonp'
import classnames from 'classnames'
import styles from './SearchBar.module.css'
import SearchIcon from '../Icons/SearchIcon'

const suggestURL =
  'https://suggest.finditnowonline.com/SuggestionFeed/Suggestion?format=jsonp&gd=SY1002042&q='

export const SearchBar: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('')
  const [highlightIndex, setHighlightIndex] = useState(0)
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false)
  const [suggestedWords, setSuggestedWords] = useState([])

  useEffect(() => {
    document.addEventListener('keydown', handleHighlight)
    return () => {
      document.removeEventListener('keydown', handleHighlight)
    }
  }, [suggestedWords])

  function handleHighlight(event) {
    switch (event.keyCode) {
      case 38:
        setHighlightIndex((prevIndex) => {
          if (prevIndex === 0) {
            return prevIndex
          } else {
            return prevIndex - 1
          }
        })
        break
      case 40:
        setHighlightIndex((prevIndex) => {
          console.log(suggestedWords.length)
          if (prevIndex === suggestedWords.length - 1) {
            return prevIndex
          } else {
            return prevIndex + 1
          }
        })
        break
    }
  }
  async function showSuggestedWords(event) {
    const value = event.target.value
    if (!value) return

    setSearchValue(value)
    try {
      const res = await fetchJsonp(`${suggestURL}${searchValue}`)
      const suggestedWordsArray = await res.json()
      setSuggestedWords(suggestedWordsArray[1].slice(0, 10))
      setIsSuggestionOpen(true)
      return
    } catch {
      console.log('error fetching suggested results')
      setIsSuggestionOpen(false)
    }
  }

  function handleSelectWord(word) {
    setSearchValue(word)
    setIsSuggestionOpen(false)
  }

  function handleOnBlur() {
    setIsSuggestionOpen(false)
  }

  return (
    <div className={styles.container}>
      <form action="/Search/Index" method="get" className={styles.form}>
        <input
          name="q"
          type="text"
          value={searchValue}
          className={styles.input}
          onChange={showSuggestedWords}
          onFocus={showSuggestedWords}
          onBlur={handleOnBlur}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          placeholder="Every search gives water..."
        />
        <button className={styles.button} type="submit">
          <SearchIcon color="#ccc" size={14} />
        </button>
      </form>
      {isSuggestionOpen && (
        <ul className={styles.autosuggestResults}>
          {suggestedWords.map((word, i) => (
            <li
              key={i}
              className={classnames(styles.autosuggestWord, {
                [styles.highlight]: i === highlightIndex
              })}
              onMouseDown={() => handleSelectWord(word)}
            >
              <SearchIcon color="#212121" size={14} /> {''}
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
