import React from 'react'
import AccordionComponent from './Accordion'

export default { title: 'Components/Accordion' }

const faqs = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    text:
      'Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.',
  },
  {
    title: 'Dignissimos sequi architecto?',
    text:
      'Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.',
  },
  {
    title: 'Voluptas praesentium facere?',
    text: 'Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.',
  },
]

export const Card = () => <AccordionComponent list={faqs} />
