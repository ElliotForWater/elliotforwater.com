/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
import React, { useState, useEffect } from 'react'
import styles from './Carousel.module.css'

const slideWidth = 30

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const createItem = (items, position, index) => {
  const length = items.length
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
      opacity: 1,
      filter: 'none',
    },
    player: items[index].player,
  }

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: 'grayscale(1)' }
      break
    case length:
      break
    default:
      item.styles = { ...item.styles, opacity: 0 }
      break
  }
  return item
}

const CarouselSlideItem = ({ items, pos, index }) => {
  const item = createItem(items, pos, index)

  return (
    <li className={styles.carouselSlideItem} style={item.styles}>
      <div className={styles.carouselSlideItemImg}>
        <img src={item.player.image.url} alt={item.player.image.title} />
      </div>
      <div className={styles.carouselSlideItemBody}>
        <h4>{item.player.title}</h4>
        <p>{item.player.conten}</p>
      </div>
    </li>
  )
}

const Carousel = ({ slides }) => {
  const keys = Array.from(Array(slides.length).keys())

  const [itemsKeys, setItemsKeys] = useState(keys)
  const [isTicking, setIsTicking] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false))
  }, [isTicking])

  useEffect(() => {
    setActiveIndex((itemsKeys.length - (itemsKeys[0] % itemsKeys.length)) % itemsKeys.length) // prettier-ignore
  }, [itemsKeys])

  function prevClick(jump = 1) {
    if (!isTicking) {
      setIsTicking(true)
      setItemsKeys((prev) => {
        return prev.map((_, i) => prev[(i + jump) % itemsKeys.length])
      })
    }
  }

  function nextClick(jump = 1) {
    if (!isTicking) {
      setIsTicking(true)
      setItemsKeys((prev) => {
        return prev.map((_, i) => prev[(i - jump + itemsKeys.length) % itemsKeys.length])
      })
    }
  }

  function handleDotClick(index) {
    if (index < activeIndex) prevClick(activeIndex - index)
    if (index > activeIndex) nextClick(index - activeIndex)
  }

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselInner}>
        <button className={styles.carouselBtnPrev} onClick={() => prevClick()}>
          <i className={styles.carouselBtnArrowLeft} />
        </button>
        <div className={styles.carouselContainer}>
          <ul className={styles.carouselSlideList}>
            {itemsKeys.map((pos, i) => (
              <CarouselSlideItem key={i} items={slides} index={i} pos={pos} />
            ))}
          </ul>
        </div>
        <button className={styles.carouselBtnNext} onClick={() => nextClick()}>
          <i className={styles.carouselBtnArrowRight} />
        </button>
        <div className={styles.carouselDots}>
          {itemsKeys.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIndex ? styles.carouselDotActive : styles.carouselDot}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
