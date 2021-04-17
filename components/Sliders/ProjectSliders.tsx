import React from 'react'
import Slider from 'react-slick'
import ButtonOutline from '../Buttons/ButtonOutline'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useWindowResize from '../../hooks/useWindowResize'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    <div className='slickWrapper' style={{ width: useWindowResize().width }}>
      <Slider {...settings}>
        {slides.map(({ title, text, image, ctaLabel, ctaLink }, index) => (
          <div key={index}>
            <div className='slideWrap'>
              <img src={image.url} alt={image.title} />
              <div className='slideContent'>
                <h3>{title}</h3>
                <p className='text'>{text}</p>
                {ctaLabel && <ButtonOutline href={ctaLink}>{ctaLabel}</ButtonOutline>}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>
        {`
          .slickWrapper {
            position: relative;
          }

          :global(.slick-dots) {
            bottom: 10px;
          }

          :global(.slick-dots li button::before) {
            font-size: 10px;
          }

          :global(.slick-prev),
          :global(.slick-next) {
            opacity: 0.3;
            color: black;
            font-size: 3em;
            z-index: 1;
          }

          :global(.slick-next) {
            right: 35px;
          }

          :global(.slick-prev) {
            left: 0;
          }

          :global(.slick-prev:hover),
          :global(.slick-next:hover) {
            opacity: 1;
            color: black;
          }

          :global(.slick-prev::before),
          :global(.slick-next::before) {
            content: '';
          }

          .slideWrap {
            display: block;
          }

          .slideWrap img {
            width: 100%;
            height: 200px;
          }

          .slideContent {
            padding: 20px;
            padding-bottom: 50px;
            text-align: center;
            background: var(--elliotLink);
            width: 100%;
            color: white;
          }

          .text {
            padding-bottom: 20px;
          }

          @media (min-width: 768px) {
            .slideWrap {
              display: flex;
            }

            .slideWrap img {
              width: 50%;
            }

            .slideContent {
              width: 50%;
              text-align: left;
            }
          }
        `}
      </style>
    </div>
  )
}
