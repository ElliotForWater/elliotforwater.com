import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRouter } from 'next/router'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '../Forms/Inputs/Inputs'
import { UserContext } from '../../context/UserContext'
import fetchJsonp from 'fetch-jsonp'
import classnames from 'classnames'
import useTranslation from 'next-translate/useTranslation'
import styles from './SearchBar.module.css'
import SearchIcon from '../Icons/SearchIcon'
import { queryNoWitheSpace } from '../../helpers/_utils'

type SearchProps = {
  big?: boolean
}

const SUGGESTED_WORDS_URL = 'https://suggest.finditnowonline.com/SuggestionFeed/Suggestion?format=jsonp&gd=SY1002042&q='

const SearchBar = ({ big }: SearchProps) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { query, type, method } = router.query
  const { userState, setNextUserState } = useContext(UserContext)

  const initType = typeof type === 'undefined' ? 'web' : type
  const initSearchValue = typeof query === 'undefined' ? '' : query
  const [searchValue, setSearchValue] = useState<string | string[]>(initSearchValue)
  const [typeValue, setTypeValue] = useState<string | string[]>(initType)
  const [highlightIndex, setHighlightIndex] = useState<number>(null)
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false)
  const [suggestedWords, setSuggestedWords] = useState<Array<string>>([])
  const [searchSuggestedWords, setSearchSuggestedWords] = useState(true)
  const inputEl = useRef(null)

  const methods = useForm({
    defaultValues: {
      language: userState.language,
      adultContentFilter: userState.adultContentFilter,
      openInNewTab: userState.openInNewTab,
    },
  })
  const { handleSubmit, register } = methods

  if (type !== typeValue && typeValue !== initType) {
    setTypeValue(type)
  }

  useEffect(() => {
    if (method === 'topbar') {
      setNextUserState({ numOfSearches: Number(userState.numOfSearches) + 1 })
    }

    if (query !== (searchValue && undefined)) {
      setSearchValue(query)
    }
  }, [query])

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
        // setSearchValue(event.target.defaultValue)
      }
    }
    document.body.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown)
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

  function onSubmit() {
    search()
  }

  function resetDropdown(event) {
    if (!big) {
      setIsSuggestionOpen(false)
    }
    setHighlightIndex(null)
    event && event.target.blur()
  }

  function search(word?: string, event?) {
    setNextUserState({ numOfSearches: Number(userState.numOfSearches) + 1 })

    if ((word && word !== '') || searchValue !== '') {
      const queryNoSpace = queryNoWitheSpace(word || searchValue)
      router.push(`search?query=${queryNoSpace}&type=${typeValue}`)
      resetDropdown(event)
    }
  }

  function handleOnMouseDown(word: string) {
    setSearchValue(word)
    search(word)
  }

  function handleOnChange(el) {
    setSearchValue(el)
    setSearchSuggestedWords(true)
    searchValue !== ('' || undefined) && setIsSuggestionOpen(true)
  }

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <div className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <form ref={inputEl}>
            <Input
              name='q'
              type='search'
              value={searchValue}
              className={big ? styles.inputBig : styles.input}
              onChange={(el) => handleOnChange(el.target.value)}
              onFocus={(el) => handleOnChange(el.target.value)}
              onBlur={resetDropdown}
              autoComplete='off'
              autoCorrect='off'
              spellCheck='false'
              placeholder={t('common:search_input')}
              register={register}
            />
            <button className={big ? styles.buttonBig : styles.button} type='submit'>
              <SearchIcon color='var(--elliotPrimary)' size={16} />
            </button>
          </form>
        </div>
      </FormProvider>

      {isSuggestionOpen && (
        <ul className={big ? styles.autosuggestResultsBig : styles.autosuggestResults}>
          {suggestedWords.map((word, i) => (
            <li
              key={i}
              className={classnames(styles.autosuggestWord, {
                [styles.highlight]: i === highlightIndex,
              })}
              onMouseDown={(el) => {
                const input = el.target as HTMLElement
                handleOnMouseDown(input.innerText)
              }}
              ref={(el) => {
                if (i === highlightIndex && el) {
                  return setSearchValue(el.innerText)
                }
              }}
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
