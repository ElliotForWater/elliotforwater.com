import React from 'react'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
import useTranslation from 'next-translate/useTranslation'

interface IncrementProp {
  incrementIndex: (Index: number) => void
  currIndex: number
}

const LoadMore = ({ currIndex, incrementIndex }: IncrementProp) => {
  const { t } = useTranslation()

  function handleIncrementIndex() {
    return incrementIndex(currIndex + 1)
  }

  return <ButtonOutline onClick={handleIncrementIndex}>{t('common:load_more')}</ButtonOutline>
}

export default LoadMore
