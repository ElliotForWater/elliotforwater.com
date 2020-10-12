import React, { useState, useEffect, useCallback } from 'react'
import fetchJsonp from 'fetch-jsonp'
import classnames from 'classnames'
import styles from './SearchBar.module.css'
import SearchIcon from '../Icons/SearchIcon'

const suggestURL =
  'https://suggest.finditnowonline.com/SuggestionFeed/Suggestion?format=jsonp&gd=SY1002042&q='

const SearchBar = () => {
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

  const handleHighlight = useCallback((event) => {
    if (event.keyCode === 38) {
      setHighlightIndex((prevIndex: number) => {
        if (prevIndex === 0) {
          return prevIndex
        } else {
          return prevIndex - 1
        }
      })
    }

    if (event.keyCode === 40) {
      setHighlightIndex((prevIndex: number) => {
        if (prevIndex === suggestedWords.length - 1) {
          return prevIndex
        } else {
          return prevIndex + 1
        }
      })
    }
  }, [])
  async function showSuggestedWords (event: React.ChangeEvent<HTMLInputElement>): Promise<any> {
    setSearchValue(event.target.value)

    try {
      const res = await fetchJsonp(`${suggestURL}${searchValue}`)
      const suggestedWordsArray = await res.json()
      console.log('suggestedW', suggestedWordsArray[1].slice(0, 10))
      setSuggestedWords(suggestedWordsArray[1].slice(0, 10))
      setIsSuggestionOpen(true)
      return
    } catch {
      console.log('error fetching suggested results')
      setIsSuggestionOpen(false)
    }
  }

  function handleSelectWord (word: string) {
    setSearchValue(word)
    setIsSuggestionOpen(false)
  }

  function handleOnBlur () {
    setIsSuggestionOpen(false)
  }

  return (
    <div className={styles.container}>
      <form action='/Search/Index' method='get' className={styles.form}>
        <input
          name='q'
          type='text'
          value={searchValue}
          className={styles.input}
          onChange={showSuggestedWords}
          onFocus={showSuggestedWords}
          onBlur={handleOnBlur}
          autoComplete='off'
          autoCapitalize='off'
          autoCorrect='off'
          spellCheck='false'
          placeholder='Every search gives water...'
        />
        <button className={styles.button} type='submit'>
          <SearchIcon color='#ccc' size={14} />
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
              onMouseDown={() => handleSelectWord(word || '')}
            >
              <SearchIcon color='#212121' size={14} />
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
