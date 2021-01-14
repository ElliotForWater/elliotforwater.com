import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import SettingsForm from './SettingsForm'
import { UserContext } from '../../../context/UserContext'
import { user } from '../../../__mocks__/userContext'
const userContext = {
  userState: user,
  setNextUserState: () => {},
}

describe('SettingsForm', () => {
  it('should render without throwing an error', async function () {
    await act(async () => {
      render(
        <UserContext.Provider value={userContext}>
          <SettingsForm callbackCloseSettings={() => console.log('close')} />)
        </UserContext.Provider>
      )
    })
  })

  it('should watch input correctly', async function () {
    await act(async () => {
      render(
        <UserContext.Provider value={userContext}>
          <SettingsForm callbackCloseSettings={() => console.log('close')} />)
        </UserContext.Provider>
      )
    })

    expect(screen.queryByDisplayValue('common:settings.english')).toBeDefined()
    expect(screen.queryByDisplayValue('common:settings.moderate')).toBeDefined()
    expect(screen.queryByRole('checkbox').checked).toBeFalsy()
  })

  // TODO: add test for onSubmit
})
