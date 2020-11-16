import React, { useState, useEffect, useCallback } from 'react'
import fetchJsonp from 'fetch-jsonp'
import classnames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import styles from './SearchBar.module.css'
import SearchIcon from '../Icons/SearchIcon'

type SearchProps = {
  big?: boolean
}

const suggestURL =
  'https://suggest.finditnowonline.com/SuggestionFeed/Suggestion?format=jsonp&gd=SY1002042&q='

const SearchBar = ({ big }: SearchProps) => {
  const { t } = useTranslation()
  const [searchValue, setSearchValue] = useState<string>('')
  const [highlightIndex, setHighlightIndex] = useState<number>(0)
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false)
  const [suggestedWords, setSuggestedWords] = useState<Array<string>>([])

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
    // setIsSuggestionOpen(false)
  }

  return (
    <div>
      <form action='/Search/Index' method='get' className={styles.form}>
        <input
          name='q'
          type='text'
          value={searchValue}
          className={big ? styles.inputBig : styles.input}
          onChange={showSuggestedWords}
          onFocus={showSuggestedWords}
          onBlur={handleOnBlur}
          autoComplete='off'
          autoCapitalize='off'
          autoCorrect='off'
          spellCheck='false'
          placeholder={t('common:search_input')}
        />
        <button className={big ? styles.buttonBig : styles.button} type='submit'>
          <SearchIcon color='#ccc' size={16} />
        </button>
      </form>
      {isSuggestionOpen && (
        <ul className={big ? styles.autosuggestResultsBig : styles.autosuggestResults}>
          {suggestedWords.map((word, i) => (
            <li
              key={i}
              className={classnames(styles.autosuggestWord, {
                [styles.highlight]: i === highlightIndex
              })}
              onMouseDown={() => handleSelectWord(word || '')}
            >
              <span className={styles.autosuggestItemIcon}>
                <SearchIcon color='#212121' size={14} />
              </span>
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
