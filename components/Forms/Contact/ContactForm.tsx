import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ToastList from '../../Toast/ToastList'
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary'

const ContactForm = () => {
  const [list, setList] = useState([])
  const { t } = useTranslation()

  /* eslint-disable-next-line no-shadow */
  enum NOTIFICATION {
    Submit,
    Success,
    ConnectionError,
    ServerError,
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
      case NOTIFICATION.None:
      default:
        setList([])
        break
    }

    if (toastProperties) {
      setList([...list, toastProperties])
    }
  }

  async function contactApiPost(event) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/contacts/contactus`

    const { name, email, phone, msg } = event.target.elements
    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: msg.value,
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

  async function handleSubmit(event) {
    // Reset any notifications
    setList([])
    showToast(NOTIFICATION.Submit)

    // Prevent form post back
    event.preventDefault()

    try {
      const response = await contactApiPost(event)

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
    <>
      <form method='post' onSubmit={handleSubmit}>
        <div className='row'>
          <div className='form-group col-sm-6'>
            <input type='text' className='form-control' id='name' name='name' placeholder={t('common:forms.name')} required />
          </div>
          <div className='form-group col-sm-6'>
            <input type='email' className='form-control' id='email' name='email' placeholder={t('common:forms.email')} required />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-md-12'>
            <input type='tel' className='form-control' id='phone' name='phone' placeholder={t('common:forms.phone')} required />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-md-12'>
            <textarea className='form-control form-control--multiline' id='msg' name='msg' placeholder={t('common:forms.message')} rows={10} required />
          </div>
        </div>
        <div className='row'>
          <div className='form-group col-md-12'>
            <input type='tel' className='form-control hidden' id='tel' name='tel' />
          </div>
        </div>
        <div className='form-row'>
          <div className='col-md-12'>
            <ButtonPrimary big>
              <button type='submit'>{t('common:forms.submit')}</button>
            </ButtonPrimary>
          </div>
        </div>
        <ToastList toastList={list} position='bottomRight' />
      </form>
      <style jsx>
        {`
          .col-md-12 {
            display: flex;
            justify-content: flex-end;
          }

          .hidden {
            display: none;
          }
        `}
      </style>
    </>
  )
}

export default ContactForm
