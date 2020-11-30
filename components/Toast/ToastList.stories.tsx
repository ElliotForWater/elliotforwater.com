import React from 'react'
import ToastListComponent from './ToastList'

const args = {
  toastList: [
    {
      title: 'Success',
      message: 'Something was working.',
      backgroundColor: '#5cb85c',
      icon: '/images/toast/check.svg',
    },
    {
      title: 'Info',
      message: 'Some information',
      backgroundColor: '#5bc0de',
      icon: '/images/toast/info.svg',
    },
    {
      title: 'Warning',
      message: 'Be careful now!',
      backgroundColor: '#f0ad4e',
      icon: '/images/toast/warning.svg',
    },
    {
      title: 'Error',
      message: 'An error occured on our server.',
      backgroundColor: '#d9534f',
      icon: '/images/toast/error.svg',
    },
  ],
}

export default { title: 'Components/ToastList' }

export const ToastList = () => <ToastListComponent {...args} />
