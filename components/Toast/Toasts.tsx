import React from 'react'
import Toast from './Toast'

const toasts = {
  toastSuccess: (props) => {
    return <Toast {...props} backgroundColor='#5cb85c' icon='/images/toast/check.svg' />
  },

  toastInfo: (props) => {
    return <Toast {...props} backgroundColor='#5bc0de' icon='/images/toast/info.svg' />
  },

  toastWarning: (props) => {
    return <Toast {...props} backgroundColor='#f0ad4e' icon='/images/toast/warning.svg' />
  },

  toastError: (props) => {
    return <Toast {...props} backgroundColor='#d9534f' icon='/images/toast/error.svg' />
  }
}

export default toasts
