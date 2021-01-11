import React from 'react'
import ButtonComp from './Button'
import ButtonPrimaryComp from './ButtonPrimary'
import TextButtonComp from './TextButton'
import ButtonSubscribe from './ButtonSubscribe'
import ButtonAddToBrowserComp from './ButtonAddToBrowser'
import ButtonOutlineComp from './ButtonOutline'

export default {
  title: 'Inputs/Button',
  decorators: [
    (Story: React.FC) => (
      <div style={{ padding: '40px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const Button = () => (
  <>
    <p style={{ marginBottom: '20px' }}>Buttons are listed with link and without link</p>
    <h3>Simple</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
      <ButtonComp>
        <a href='#'>Go somewhere</a>
      </ButtonComp>
      <ButtonComp>I'm a button</ButtonComp>
      <ButtonComp>
        <button>I'm a button in the Button Component</button>
      </ButtonComp>
    </div>

    <h3>Outline</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
      <ButtonComp outline>
        <a href='#'>Go somewhere</a>
      </ButtonComp>
      <ButtonComp outline>Load More</ButtonComp>
    </div>

    <h3>Big</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
      <ButtonComp big>
        <a href='#'>Go somewhere</a>
      </ButtonComp>
      <ButtonComp big>A bigger button</ButtonComp>
    </div>

    <h3>Fluid</h3>
    <div style={{ marginBottom: '20px' }}>
      <ButtonComp fluid>
        <a href='#'>Go somewhere</a>
      </ButtonComp>
      <p />
    </div>

    <h3>With callback on click</h3>
    <ButtonComp onClick={() => console.log('click')}>click and check the web console</ButtonComp>

    <h3>With linkHref</h3>
    <ButtonComp linkHref='#'>Click on me and go to #</ButtonComp>

    <h3>Combo</h3>
    <p>Big and outline</p>
    <div style={{ marginBottom: '20px' }}>
      <ButtonComp big outline>
        <a href='#'>Go somewhere</a>
      </ButtonComp>
    </div>
    <p>Big and fluid</p>
    <div style={{ marginBottom: '20px' }}>
      <ButtonComp big fluid>
        <a href='#'>Go somewhere</a>
      </ButtonComp>
    </div>
  </>
)

export const ButtonPrimary = () => (
  <ButtonPrimaryComp type='primary' onClick={() => console.log('you clicked on me?!')}>
    I'm faboulous!
  </ButtonPrimaryComp>
)

export const ButtonOutline = () => <ButtonOutlineComp>Simple outline</ButtonOutlineComp>

export const TextButton = () => <TextButtonComp>I'm just some clickable text</TextButtonComp>

export const Subscribe = () => <ButtonSubscribe>Subscribe</ButtonSubscribe>

export const ButtonAddToBrowser = () => <ButtonAddToBrowserComp />
