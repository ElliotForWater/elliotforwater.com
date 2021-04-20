import React from 'react'
import PersonComponent from './Person'

export default {
  title: 'Components/Person',
  decorators: [
    (Story: React.FC) => (
      <div style={{ marginTop: '50px', maxWidth: '300px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const PersonSimple = () => (
  <PersonComponent
    name='James Ross'
    profilePic={{ url: 'https://thispersondoesnotexist.com/image', title: 'my pic' }}
  />
)
export const PersonAllInfo = () => (
  <PersonComponent
    name='James Ross'
    profilePic={{ url: 'https://thispersondoesnotexist.com/image', title: 'my pic' }}
    shortDescription='Boss of the world'
    longDescription='some super cool things about how awesome I am!'
  />
)

export const PersonBig = () => (
  <PersonComponent
    name='James Ross'
    profilePic={{ url: 'https://thispersondoesnotexist.com/image', title: 'my pic' }}
    size='big'
  />
)

export const PersonSmall = () => (
  <PersonComponent
    name='James Ross'
    profilePic={{ url: 'https://thispersondoesnotexist.com/image', title: 'my pic' }}
    shortDescription='Boss of the world'
    size='small'
  />
)
