import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../context/UserContext'
import fetchJsonp from 'fetch-jsonp'
import classnames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import styles from './SearchBar.module.css'
import SearchIcon from '../Icons/SearchIcon'
import { updateSearchCounter } from '../../helpers/_settingsHelper'

type SearchProps = {
  big?: boolean
}

const SUGGESTED_WORDS_URL = 'https://suggest.finditnowonline.com/SuggestionFeed/Suggestion?format=jsonp&gd=SY1002042&q='

const SearchBar = ({ big }: SearchProps) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { query, type, method } = router.query
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [userContext, setUserContext] = useContext(UserContext)
  const initType = typeof type === 'undefined' ? 'web' : type
  const [searchValue, setSearchValue] = useState<string | string[]>(query || '')
  const [typeValue, setTypeValue] = useState<string | string[]>(initType)
  const [highlightIndex, setHighlightIndex] = useState<number>(null)
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false)
  const [suggestedWords, setSuggestedWords] = useState<Array<string>>([])
  const [searchSuggestedWords, setSearchSuggestedWords] = useState(true)
  const inputEl = useRef(null)

  if (type !== typeValue && typeValue !== initType) {
    setTypeValue(type)
  }

  useEffect(() => {
    if (method === 'topbar') {
      updateSearchCounter(setUserContext)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event

      switch (key) {
        case 'ArrowUp':
          event.preventDefault()
          setSearchSuggestedWords(false)
          return setHighlightIndex((prevIndex: number) => {
            if (prevIndex === 0) {
              return prevIndex
            } else {
              return prevIndex - 1
            }
          })

        case 'ArrowDown':
          setSearchSuggestedWords(false)
          return setHighlightIndex((prevIndex: number) => {
            if (prevIndex === null) {
              return 0
            }

            if (prevIndex === suggestedWords.length - 1) {
              return prevIndex
            } else {
              return prevIndex + 1
            }
          })

        case 'Escape':
          setIsSuggestionOpen(false)
          break

        default:
          setHighlightIndex(null)
          setSearchValue(event.target.defaultValue)
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchValue])

  useEffect(() => {
    const fetchSuggestedWords = async () => {
      try {
        const res = await fetchJsonp(`${SUGGESTED_WORDS_URL}${searchValue}`)
        const suggestedWordsArray = await res.json()
        setSuggestedWords(suggestedWordsArray[1].slice(0, 10))
        return
      } catch {
        console.log('error fetching suggested results')
      }
    }

    if (searchSuggestedWords) {
      fetchSuggestedWords()
    }
  }, [searchValue])

  function resetDropdown() {
    setIsSuggestionOpen(false)
    setHighlightIndex(null)
  }

  function search(word?: string) {
    updateSearchCounter(setUserContext)
    router.push(`search?query=${word || searchValue}&type=${typeValue}`)
    resetDropdown()
  }

  function handleOnMouseDown(word: string) {
    setSearchValue(word)
    search()
  }

  function handleKeyPress(event) {
    if (event.charCode === 13) {
      search()
      inputEl?.current.blur()
    }
  }

  function handleOnChange(el) {
    setSearchValue(el.target.value)
    setSearchSuggestedWords(true)
    setIsSuggestionOpen(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <input
          name='q'
          type='search'
          value={searchValue}
          className={big ? styles.inputBig : styles.input}
          ref={inputEl}
          onChange={handleOnChange}
          onFocus={handleOnChange}
          onBlur={() => resetDropdown()}
          onKeyPress={handleKeyPress}
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          placeholder={t('common:search_input')}
        />
        <button className={big ? styles.buttonBig : styles.button} onClick={() => search()}>
          <SearchIcon color='var(--elliotPrimary)' size={16} />
        </button>
      </div>

      {isSuggestionOpen && (
        <ul className={big ? styles.autosuggestResultsBig : styles.autosuggestResults}>
          {suggestedWords.map((word, i) => (
            <li
              key={i}
              className={classnames(styles.autosuggestWord, {
                [styles.highlight]: i === highlightIndex,
              })}
              onMouseDown={() => handleOnMouseDown(word || '')}
              ref={(el) => i === highlightIndex && el && setSearchValue(el.innerText)}
            >
              <span className={styles.autosuggestItemIcon}>
                <SearchIcon color='var(--placeholder)' size={14} />
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
