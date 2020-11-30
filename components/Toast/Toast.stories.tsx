import React from 'react'
import ToastComponent from './Toast'

export default {
  title: 'Components/Toast',
  component: ToastComponent,
}

const Template = (args) => <ToastComponent {...args} />

export const Success = Template.bind({})
Success.args = {
  title: 'Success',
  message: 'Something was working.',
  backgroundColor: '#5cb85c',
  icon: '/images/toast/check.svg',
}

export const Info = Template.bind({})
Info.args = {
  title: 'Info',
  message: 'Some information',
  backgroundColor: '#5bc0de',
  icon: '/images/toast/info.svg',
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning',
  message: 'Be careful now!',
  backgroundColor: '#f0ad4e',
  icon: '/images/toast/warning.svg',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Error',
  message: 'An error occured on our server.',
  backgroundColor: '#d9534f',
  icon: '/images/toast/error.svg',
}
