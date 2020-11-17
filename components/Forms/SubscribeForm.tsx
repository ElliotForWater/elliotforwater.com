import React, { useState } from 'react'
import ButtonOutline from '../Buttons/ButtonOutline'
import ToastList from '../Toast/ToastList'
import styles from './SubscribeForm.module.css'

const SubscribeForm = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [list, setList] = useState([])
  let toastProperties = null

  const showToast = (type) => {
    const id = Math.floor(Math.random() * 101 + 1)

    switch (type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          message: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: '/images/toast/check.svg'
        }
        break
      case 'error':
        toastProperties = {
          id,
          title: 'Error',
          message: 'An unknown error occured!',
          backgroundColor: '#d9534f',
          icon: '/images/toast/error.svg'
        }
        break
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          message: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          icon: '/images/toast/info.svg'
        }
        break
      case 'submitting':
        toastProperties = {
          id,
          title: 'Submitting...',
          message: 'Please wait.',
          backgroundColor: '#f0ad4e',
          icon: '/images/toast/warning.svg'
        }
        break

      default:
        setList([])
    }

    setList([...list, toastProperties])
  }

  async function subscribe () {
    const url = 'https://localhost:44348/api/contacts'
    const data = {
      email: emailValue
    }
    const postOptions = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    return fetch(url, postOptions)
      .then((response) => {
        return response
      })
      .catch(() => {
        throw new Error('There was a problem connecting to the network!')
      })
  }

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.target.value)
  }

  async function handleSubmit (event) {
    event.preventDefault()

    showToast('submitting')
    const response = await subscribe()

    if (response.ok) {
      showToast('success')
      return
    }

    // const json = await response.json()
    if (response.status === 422) {
      showToast('info')
      return
    }
    showToast('error')
  }

  return (
    <form className={styles.newsletterForm} method='post' onSubmit={handleSubmit}>
      <input type='text' name='name' style={{ display: 'none' }} />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={emailValue}
        onChange={handleChange}
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
