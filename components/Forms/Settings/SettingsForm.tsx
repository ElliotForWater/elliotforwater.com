import React, { useContext } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useForm, FormProvider } from 'react-hook-form'
import { Input, Select } from '../Inputs/Inputs'
import ButtonPrimary from '../../Buttons/ButtonPrimary'
import TextButton from '../../Buttons/TextButton'
import { UserContext } from '../../../context/UserContext'
import styles from './SettingsForm.module.css'

type InputsProp = {
  language: number
  adultContentFilter: number
  openInNewTab: boolean
}

const SettingsForm = ({ callbackCloseSettings }) => {
  const { t } = useTranslation()
  const { userState, setNextUserState } = useContext(UserContext)

  const methods = useForm<InputsProp>({
    defaultValues: {
      language: userState.language,
      adultContentFilter: userState.adultContentFilter,
      openInNewTab: userState.openInNewTab,
    },
  })
  const { handleSubmit, register } = methods

  function onSubmit({ language, adultContentFilter, openInNewTab }) {
    setNextUserState({
      language,
      adultContentFilter,
      openInNewTab,
    })

    callbackCloseSettings()
  }

  return (
    <>
      <div className={styles.settingsHeader}>
        <h4 className='title'>{t('common:settings.title')}</h4>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.settingsBody}>
            <div className='control-group'>
              <label htmlFor='language'>{t('common:settings.language')}</label>
              <Select
                id='language'
                name='language'
                options={[
                  { label: t('common:settings.english'), value: 1 },
                  // { label: t('common:settings.italian'), value: 2 },
                ]}
                register={register}
              />
            </div>

            <div className='control-group'>
              <label htmlFor='adultContentFilter'>{t('common:settings.adult_filter')}</label>
              <Select
                id='adultContentFilter'
                name='adultContentFilter'
                options={[
                  { label: t('common:settings.off'), value: 1 },
                  { label: t('common:settings.moderate'), value: 2 },
                  { label: t('common:settings.strict'), value: 3 },
                ]}
                register={register}
              />
            </div>

            <div className='control-group'>
              <Input id='openInNewTab' name='openInNewTab' className={styles.checkbox} type='checkbox' register={register} />
              <label className={styles.checkboxLabel} htmlFor='openInNewTab'>
                {t('common:settings.new_tab')}
              </label>
            </div>
          </div>
          <div className={styles.settingsFooter}>
            <TextButton onClick={() => callbackCloseSettings()}>{t('common:close')}</TextButton>
            <ButtonPrimary>
              <button type='submit'>{t('common:save')}</button>
            </ButtonPrimary>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default SettingsForm
