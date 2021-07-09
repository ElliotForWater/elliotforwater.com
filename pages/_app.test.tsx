import React, { FC, useEffect } from 'react'
import Cookies from 'js-cookie'
import { mount } from 'enzyme'
import App from './_app'
import { UserContext, UserContextProps, UserState, USER_STATE_DEFAULT } from '../context/UserContext'
import { COOKIE_NAME_ADULT_FILTER, COOKIE_NAME_NEW_TAB, COOKIE_NAME_SEARCH_COUNT } from '../helpers/_cookies'

describe('App', () => {
  let ContextWrapper
  let TestComponent: FC<UserContextProps>
  let cookies = {}

  function setCookies(_cookies) {
    for (const key in _cookies) {
      Cookies.set(key, _cookies[key])
    }
    cookies = _cookies
  }

  function resetCookies() {
    for (const key in cookies) {
      Cookies.remove(key)
    }
    cookies = {}
  }

  beforeEach(() => {
    ContextWrapper = () => {
      return (
        <UserContext.Consumer>
          {({ userState, setUserState }) => <TestComponent userState={userState} setUserState={setUserState} />}
        </UserContext.Consumer>
      )
    }
  })

  afterEach(() => {
    resetCookies()
  })

  it('should pass default user state to context', function () {
    TestComponent = () => null

    const wrapper = mount(<App Component={ContextWrapper} pageProps={null} router={null} />)

    expect(wrapper.find(TestComponent).prop('userState')).toEqual(USER_STATE_DEFAULT)
  })

  it('should pass user state merged from cookies to context', function () {
    setCookies({
      [COOKIE_NAME_SEARCH_COUNT]: 3,
      [COOKIE_NAME_NEW_TAB]: true,
      [COOKIE_NAME_ADULT_FILTER]: 'Off',
    })

    TestComponent = () => null

    const wrapper = mount(<App Component={ContextWrapper} pageProps={null} router={null} />)

    const expectedResult: UserState = {
      ...USER_STATE_DEFAULT,
      numOfSearches: 3,
      openInNewTab: true,
      adultContentFilter: 'Moderate',
    }
    expect(wrapper.find(TestComponent).prop('userState')).toEqual(expectedResult)
  })

  it('should pass user state merged from server cookies to context', function () {
    const serverCookies = {
      [COOKIE_NAME_SEARCH_COUNT]: '6',
      [COOKIE_NAME_NEW_TAB]: 'true',
      [COOKIE_NAME_ADULT_FILTER]: 'Off',
    }

    TestComponent = () => null

    const wrapper = mount(
      <App serverCookies={serverCookies} Component={ContextWrapper} pageProps={null} router={null} />
    )

    const expectedResult: UserState = {
      ...USER_STATE_DEFAULT,
      numOfSearches: 6,
      openInNewTab: true,
      adultContentFilter: 'Moderate',
    }
    expect(wrapper.find(TestComponent).prop('userState')).toEqual(expectedResult)
  })

  it('should pass user state "false" merged from cookies to context', function () {
    // "false" is a special case as booleans get stringified
    setCookies({
      [COOKIE_NAME_NEW_TAB]: false,
    })

    TestComponent = () => null

    const wrapper = mount(<App Component={ContextWrapper} pageProps={null} router={null} />)

    const expectedResult: UserState = {
      ...USER_STATE_DEFAULT,
      openInNewTab: false,
    }
    expect(wrapper.find(TestComponent).prop('userState')).toEqual(expectedResult)
  })

  it('should update user when calling `setUserState` via context', function () {
    TestComponent = ({ setUserState }) => {
      useEffect(() => {
        setUserState({ isModalOpen: true })
      }, [])
      return null
    }

    const wrapper = mount(<App Component={ContextWrapper} pageProps={null} router={null} />)

    const expectedResult: UserState = { ...USER_STATE_DEFAULT, isModalOpen: true }
    expect(wrapper.find(TestComponent).prop('userState')).toEqual(expectedResult)
  })

  it('should update user and cookie when calling `setUserState` via context', function () {
    TestComponent = ({ setUserState }) => {
      useEffect(() => {
        setUserState({ numOfSearches: 5, openInNewTab: true })
      }, [])
      return null
    }

    const wrapper = mount(<App Component={ContextWrapper} pageProps={null} router={null} />)

    const expectedState: UserState = { ...USER_STATE_DEFAULT, numOfSearches: 5, openInNewTab: true }
    expect(wrapper.find(TestComponent).prop('userState')).toEqual(expectedState)

    expect(Cookies.get(COOKIE_NAME_SEARCH_COUNT)).toEqual('5')
    expect(Cookies.get(COOKIE_NAME_NEW_TAB)).toEqual('true')
  })
})
