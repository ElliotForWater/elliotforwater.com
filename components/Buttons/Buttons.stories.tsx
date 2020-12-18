import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSubscribe from './ButtonSubscribe'

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

export const Primary = () => (
  <>
    <p style={{ marginBottom: '20px' }}>Buttons are listed with link and without link</p>
    <h3>Simple</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
      <ButtonPrimary>
        <a href='#'>Add Elliot for Water to Chrome</a>
      </ButtonPrimary>
      <ButtonPrimary>I'm a button</ButtonPrimary>
    </div>

    <h3>Outline</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
      <ButtonPrimary outline>
        <a href='#'>Go somewhere</a>
      </ButtonPrimary>
      <ButtonPrimary outline>Load More</ButtonPrimary>
    </div>

    <h3>Big</h3>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '20px' }}>
      <ButtonPrimary big>
        <a href='#'>Go somewhere</a>
      </ButtonPrimary>
      <ButtonPrimary big>A bigger button</ButtonPrimary>
    </div>

    <h3>Fluid</h3>
    <div style={{ marginBottom: '20px' }}>
      <ButtonPrimary fluid>
        <a href='#'>Add Elliot for Water to Chrome</a>
      </ButtonPrimary>
      <p />
    </div>

    <h3>With callback on click</h3>
    <ButtonPrimary handleClick={() => console.log('click')}>click and check the web console</ButtonPrimary>

    <h3>With linkHref</h3>
    <ButtonPrimary linkHref='#'>Click on me and go to #</ButtonPrimary>

    <h3>Combo</h3>
    <p>Big and outline</p>
    <div style={{ marginBottom: '20px' }}>
      <ButtonPrimary big outline>
        <a href='#'>Add Elliot for Water to Chrome</a>
      </ButtonPrimary>
    </div>
    <p>Big and fluid</p>
    <div style={{ marginBottom: '20px' }}>
      <ButtonPrimary big fluid>
        <a href='#'>Add Elliot for Water to Chrome</a>
      </ButtonPrimary>
    </div>
  </>
)

export const Subscribe = () => <ButtonSubscribe>Subscribe</ButtonSubscribe>
