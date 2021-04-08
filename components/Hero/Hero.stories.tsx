import React from 'react'
import HeroComponent from './Hero'

export default {
  title: 'Components/Hero',
}

export const HeroWithAddtoBrowserBtn = () => (
  <HeroComponent
    imageUrl='https://images.ctfassets.net/3qtdrevau8ui/5hMuK9cWqpVntZ21DhF4YE/625c296a5ca47192171006e60c9aca4e/piggy-money.png'
    imageTitle='backgrodunimage'
    title="I'm a super hero!!"
    subtitle='I will save you forever and ever and ever...'
    withBrowserCta
  />
)

export const HeroWithCta = () => (
  <HeroComponent
    imageUrl='https://images.ctfassets.net/3qtdrevau8ui/5hMuK9cWqpVntZ21DhF4YE/625c296a5ca47192171006e60c9aca4e/piggy-money.png'
    imageTitle='backgrodunimage'
    title="I'm a super hero!!"
    subtitle='I will save you forever and ever and ever...'
    ctaLabel='please click me'
    ctaLink='#'
  />
)

export const HeroJustTitle = () => (
  <HeroComponent
    imageUrl='https://images.ctfassets.net/3qtdrevau8ui/5hMuK9cWqpVntZ21DhF4YE/625c296a5ca47192171006e60c9aca4e/piggy-money.png'
    imageTitle='backgrodunimage'
    title="I'm a super hero!!"
  />
)
