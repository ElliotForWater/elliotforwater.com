import React from 'react'
import Slider from 'react-slick'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useWindowResize from '../../hooks/useWindowResize'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './ProjectSliders.module.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FiChevronRight />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FiChevronLeft />
    </div>
  )
}

export default function CustomArrows({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className={styles.slickWrapper} style={{ width: useWindowResize().width }}>
      <Slider {...settings}>
        {slides.map(({ title, text, image, ctaLabel, ctaLink }, index) => (
          <div key={index}>
            <div className={styles.slideWrap}>
              <div className={styles.slideImg}>
                <img src={image.url} alt={image.title} />
              </div>
              <div className={styles.slideContent}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
                {ctaLink && (
                  <div className={styles.slideButton}>
                    <ButtonOutline
                      outlineReverse
                      linkHref={ctaLink}
                      target='_blank'
                      customStyle={{ color: 'white', hover: 'var(--elliotLink)' }}
                    >
                      {ctaLabel}
                    </ButtonOutline>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
