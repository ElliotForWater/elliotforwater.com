import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '../Inputs/Inputs'
import ButtonSubscribe from '../../Buttons/ButtonSubscribe'
import ToastList from '../../Toast/ToastList'
import useTranslation from 'next-translate/useTranslation'
import styles from './SubscribeForm.module.css'

/* eslint-disable-next-line no-shadow */
enum NOTIFICATION {
  Submit,
  Success,
  UserExists,
  ConnectionError,
  ServerError,
  None,
}

const SubscribeForm = () => {
  const { t } = useTranslation()
  const [list, setList] = useState([])

  const methods = useForm()
  const { handleSubmit, register, errors } = methods

  const showToast = (notification: NOTIFICATION) => {
    let toastProperties = null

    switch (notification) {
      case NOTIFICATION.Submit:
        toastProperties = {
          title: t('common:forms.submitting'),
          message: t('common:forms.submitting_text'),
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg',
        }
        break
      case NOTIFICATION.Success:
        toastProperties = {
          title: t('common:forms.success'),
          message: t('common:forms.success_text'),
          backgroundColor: '#5cb85c',
          icon: '/images/toast/check.svg',
        }
        break
      case NOTIFICATION.UserExists:
        toastProperties = {
          title: t('common:forms.thanks'),
          message: t('common:forms.thanks_text'),
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg',
        }
        break
      case NOTIFICATION.ServerError:
        toastProperties = {
          title: t('common:forms.sorry'),
          message: t('common:forms.sorry_text'),
          backgroundColor: '#d9534f',
          icon: '/images/toast/error.svg',
        }
        break
      case NOTIFICATION.ConnectionError:
        toastProperties = {
          title: t('common:forms.error'),
          message: t('common:forms.error_text'),
          backgroundColor: '#d9534f',
          icon: '/images/toast/error.svg',
        }
        break
      case NOTIFICATION.None:
      default:
        setList([])
        break
    }

    if (toastProperties) {
      setList([...list, toastProperties])
    }
  }

  async function onSubmit(data, e) {
    // Reset any notifications
    setList([])

    showToast(NOTIFICATION.Submit)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // handle success
      if (response.ok) {
        showToast(NOTIFICATION.Success)
        setTimeout(() => {
          showToast(NOTIFICATION.None)
        }, 5000)

        e.target.reset()
        return
      }

      // handle server errors
      if (response.status === 422) {
        showToast(NOTIFICATION.UserExists)
        return
      }

      showToast(NOTIFICATION.ServerError)
    } catch {
      // handle connection issuess
      showToast(NOTIFICATION.ConnectionError)
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.newsletterForm} noValidate>
        <Input name='name' type='text' hidden register={register} />
        <div className={styles.wrapperInput}>
          <Input
            customClassname={styles.newsletterEmail}
            name='email'
            type='email'
            errors={errors}
            register={register}
            rules={{
              required: { value: true, message: 'Please enter your email address!' },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address: example@someemail.com',
              },
            }}
          />
        </div>
        <ButtonSubscribe>
          <button type='submit'>{t('common:forms.subscribe')}</button>
        </ButtonSubscribe>
        <ToastList toastList={list} position='bottomRight' />
      </form>
    </FormProvider>
  )
}

export default SubscribeForm
