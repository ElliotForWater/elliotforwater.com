import React from 'react'
import SettingsFormComponent from './SettingsForm'

export default { title: 'Inputs/Forms/Settings Form' }

export const SettingsForm = () => <SettingsFormComponent callbackCloseSettings={() => console.log('close')} />
