import React from 'react'
import CarouselComponent from './Carousel'

export default {
  title: 'Components/Carousel',
}

const items = [
  {
    player: {
      title: 'Efren Reyes',
      content:
        'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: {
        title: 'people collecting water',
        url: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
      },
      ctaLabel: 'Learn more',
      ctaLink: '/project/gineau-bissau',
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      content:
        "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: {
        title: 'people collecting water',
        url: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
      },
      ctaLabel: 'Learn more',
      ctaLink: '/project/project2',
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      content: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: {
        title: 'people collecting water',
        url: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
      },
      ctaLabel: 'Learn more',
      ctaLink: '/project/project3',
    },
  },
  {
    player: {
      title: 'Mike Sigel',
      content:
        'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: {
        title: 'people collecting water',
        url: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
      },
      ctaLabel: 'Learn more',
      ctaLink: '/project/project4',
    },
  },
  {
    player: {
      title: 'Willie Mosconi',
      content:
        'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: {
        title: 'people collecting water',
        url: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
      },
      ctaLabel: 'Learn more',
      ctaLink: '/project/project5',
    },
  },
]

export const Carousel = () => <CarouselComponent slides={items} />
