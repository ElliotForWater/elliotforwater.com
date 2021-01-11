import React from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
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

  return (
    <ButtonPrimary outline onClick={handleIncrementIndex}>
      {t('common:load_more')}
    </ButtonPrimary>
  )
}

export default LoadMore
