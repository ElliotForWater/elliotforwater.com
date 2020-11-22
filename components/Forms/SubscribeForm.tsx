import React, { useState } from 'react'
import ButtonOutline from '../Buttons/ButtonOutline'
import ToastList from '../Toast/ToastList'
import styles from './SubscribeForm.module.css'

const SubscribeForm = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [list, setList] = useState([])

  // TODO: See if better way. Maybe enums are bad in Typescript.
  /* eslint-disable-next-line no-shadow */
  enum NOTIFICATION {
    Submit,
    Success,
    UserExists,
    ConnectionError,
    ServerError,
    None,
  }

  const showToast = (notification: NOTIFICATION) => {
    let toastProperties = null

    switch (notification) {
      case NOTIFICATION.Submit:
        toastProperties = {
          title: 'Submitting...',
          message: 'Please wait!',
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg',
        }
        break
      case NOTIFICATION.Success:
        toastProperties = {
          title: 'Success',
          message: 'Thanks for your interest.',
          backgroundColor: '#5cb85c',
          icon: '/images/toast/check.svg',
        }
        break
      case NOTIFICATION.UserExists:
        toastProperties = {
          title: 'Thanks',
          message: ' We already have your details',
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg',
        }
        break
      case NOTIFICATION.ServerError:
        toastProperties = {
          title: 'Sorry',
          message: 'An error occured on our server.',
          backgroundColor: '#d9534f',
          icon: '/images/toast/error.svg',
        }
        break
      case NOTIFICATION.ConnectionError:
        toastProperties = {
          title: 'Error',
          message: 'Unable to connect.',
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

  async function subscribeApiPost () {
    const url = 'https://localhost:44348/api/contacts'
    const data = {
      email: emailValue,
    }
    const postOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    return fetch(url, postOptions)
  }

  function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.target.value)
  }

  async function handleSubmit (event) {
    // Reset any notifications
    setList([])

    showToast(NOTIFICATION.Submit)

    // Prevent form post back
    event.preventDefault()

    try {
      const response = await subscribeApiPost()

      // handle success
      if (response.ok) {
        showToast(NOTIFICATION.Success)
        setTimeout(() => {
          showToast(NOTIFICATION.None)
        }, 5000)
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
    <form className={styles.newsletterForm} method='post' onSubmit={handleSubmit}>
      <input type='text' name='name' style={{ display: 'none' }} />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={emailValue}
        onChange={handleEmailChange}
        className={styles.newsletterEmail}
        required
      />
      <ButtonOutline>
        <button className={styles.submitButton} type='submit'>
          Subscribe
        </button>
      </ButtonOutline>
      <ToastList toastList={list} position='bottomRight' />
    </form>
  )
}

export default SubscribeForm
