import React, { useState, useRef, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ToastList from '../../Toast/ToastList'
import ButtonFull from '../../Buttons/ButtonFull/ButtonFull'
import { useForm, FormProvider } from 'react-hook-form'
import { Input, Textarea } from '../Inputs/Inputs'
import styles from './ContactForm.module.css'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = (props) => {
  const [list, setList] = useState([])
  const { t } = useTranslation()
  const recaptchaRef = useRef<ReCAPTCHA>()

  const methods = useForm()
  const { handleSubmit, register, errors } = methods

  /* eslint-disable-next-line no-shadow */
  enum NOTIFICATION {
    Submit,
    Success,
    ConnectionError,
    ServerError,
    RecaptchaError,
    None,
  }

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

  useEffect(() => {
    recaptchaRef.current.execute()
  }, [])

  async function onSubmit(data, event) {
    // Checking for valid captcha else we dont submit
    const token = recaptchaRef.current.getValue()

    if (!token) {
      showToast(NOTIFICATION.RecaptchaError)
      return
    } else {
      data = { ...data, recaptchaToken: token }
    }

    // Reset any notifications
    setList([])
    showToast(NOTIFICATION.Submit)

    // Prevent form post back
    event.preventDefault()

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts/contactus`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      // handle success
      if (response.ok) {
        // Clear fields
        event.target.reset()

        showToast(NOTIFICATION.Success)
        setTimeout(() => {
          showToast(NOTIFICATION.None)
        }, 5000)
        return
      }

      // handle server errors
      showToast(NOTIFICATION.ServerError)
    } catch {
      // handle connection issuess
      showToast(NOTIFICATION.ConnectionError)
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name='name'
          type='text'
          customClassname={styles.formInput}
          placeholder={t('common:forms.name')}
          register={register}
          rules={{
            required: { value: true, message: 'Please enter your name' },
          }}
        />
        <Input
          name='email'
          type='email'
          customClassname={styles.formInput}
          placeholder={t('common:forms.email')}
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
        <Textarea
          name='message'
          customClassname={styles.formInput}
          placeholder={t('common:forms.message')}
          rows={10}
          errors={errors}
          register={register}
          rules={{
            required: { value: true, message: 'Leave us a message so we can contact you back' },
          }}
        />
        <div>
          This site is protected by reCAPTCHA and the Google
          <a href='https://policies.google.com/privacy' target='_blank'>
            {' '}
            Privacy Policy{' '}
          </a>
          and
          <a href='https://policies.google.com/terms' target='_blank'>
            {' '}
            Terms of Service{' '}
          </a>
          apply.
        </div>
        <div className={styles.buttons}>
          <ButtonFull {...props}>
            <button type='submit'>{t('common:forms.submit')}</button>
          </ButtonFull>
          <ToastList toastList={list} position='bottomRight' />
        </div>
      </form>
      <ReCAPTCHA
        ref={recaptchaRef}
        size='invisible'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      />
    </FormProvider>
  )
}

export default ContactForm
