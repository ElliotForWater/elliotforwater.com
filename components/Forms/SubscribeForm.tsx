import React, { useState } from 'react'
import ButtonOutline from '../Buttons/ButtonOutline'
import styles from './SubscribeForm.module.css'

const SubscribeForm = () => {
  const [emailValue, setEmailValue] = useState<string>('')

  // const [isSubmit, setIsSubmit] = useState<bool | string>('')

  // async function submitForm({ value }) {
  //     setIsSubmit('loading')
  //     const res = await fetch(url, {
  //         body: { email: value, name: '' }
  //     })

  //     const json = await res.json()
  //     json.ok ? setIsSubmit(true) : setIsSubmit(false)

  //     setTimeout(() => { setIsSubmit('')}, 2000)
  // }

  // render (
  // if (isSubmit === 'loading') ( <div>{spinnerIcon}</div>)}
  //       {if (isSubmit) ( <div>thank you for subscribing!</div>)}
  //       {if (!isSubmit) ( <div>An error occured</div>)}
  //       {if(isSubmit === '') {
  //       }
  // );

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(event.target.value)
  }

  function handleSubmit (event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
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
    </form>
  )
}

export default SubscribeForm
