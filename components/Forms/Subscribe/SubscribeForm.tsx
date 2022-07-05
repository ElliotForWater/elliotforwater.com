import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '../Inputs/Inputs'
import ButtonSubscribe from '../../Buttons/ButtonSubscribe/ButtonSubscribe'
import ButtonFull from '../../Buttons/ButtonFull/ButtonFull'
import ToastList from '../../Toast/ToastList'
import useTranslation from 'next-translate/useTranslation'
import styles from './SubscribeForm.module.css'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

/* eslint-disable-next-line no-shadow */
enum NOTIFICATION {
  Submit,
  Success,
  UserExists,
  ConnectionError,
  ServerError,
  RecaptchaError,
  None,
}

const SubscribeForm = ({ big = false, ...props }) => {
  const { t } = useTranslation()
  const [list, setList] = useState([])
  const { executeRecaptcha } = useGoogleReCaptcha()

  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

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
      case NOTIFICATION.RecaptchaError:
        toastProperties = {
          title: 'Recaptcha Error',
          message: 'Recaptcha not verified',
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
    // Checking for valid captcha else we dont submit
    if (!executeRecaptcha) {
      showToast(NOTIFICATION.RecaptchaError)
      return
    }
    const token = await executeRecaptcha('yourAction')

    if (!token) {
      showToast(NOTIFICATION.RecaptchaError)
      return
    } else {
      data = { ...data, recaptchaToken: token }
    }

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={big ? styles.newsletterFormBig : styles.newsletterForm}
        noValidate
      >
        <div className='hidden-element'>
          <Input name='name' type='text' hidden register={register} />
        </div>
        <div className={styles.wrapperInput}>
          <Input
            customClassname={big ? styles.newsletterEmailBig : styles.newsletterEmail}
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
        {big ? (
          <div>
            <div className={styles.recapchaBranding}>
              This site is protected by reCAPTCHA and the Google
              <a href='https://policies.google.com/privacy' target='_blank'>
                {' '}
                Privacy Policy{' '}
              </a>
              and
              <a href='https://policies.google.com/terms' target='_blank'>
                {' '}
                Terms of Service{' '}
              </a>{' '}
              apply.
            </div>
            <ButtonFull {...props}>
              <button type='submit'>{t('common:forms.subscribe')}</button>
            </ButtonFull>
          </div>
        ) : (
          <ButtonSubscribe>
            <button type='submit'>{t('common:forms.subscribe')}</button>
          </ButtonSubscribe>
        )}
        <ToastList toastList={list} position='bottomRight' />
      </form>
    </FormProvider>
  )
}

export default SubscribeForm
