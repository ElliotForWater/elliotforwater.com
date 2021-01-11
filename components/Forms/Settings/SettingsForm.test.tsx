import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import SettingsForm from './SettingsForm'
import { UserContext } from '../../../context/UserContext'
import { user } from '../../../__mocks__/userContext'

describe('SettingsForm', () => {
  it('should render without throwing an error', function () {
    mount(
      <UserContext.Provider value={[user, (newObj) => console.log(newObj)]}>
        <SettingsForm callbackCloseSettings={() => console.log('close')} />)
      </UserContext.Provider>
    )
  })

  it('should watch input correctly', async function () {
    await act(async () => {
      render(
        <UserContext.Provider value={[user, (newObj) => console.log(newObj)]}>
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
