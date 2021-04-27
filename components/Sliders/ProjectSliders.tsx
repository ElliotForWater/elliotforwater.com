import React from 'react'
import Slider from 'react-slick'
import ButtonOutline from '../Buttons/ButtonOutline/ButtonOutline'
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
                <h3 className='title'>{title}</h3>
                <p className='text'>{text}</p>
                {ctaLabel && (
                  <div className='slideButton'>
                    <ButtonOutline
                      outlineReverse
                      href={ctaLink}
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
            opacity: 0.6;
            color: black;
            font-size: 4em;
            z-index: 1;
          }

          :global(.slick-next) {
            right: 40px;
          }

          :global(.slick-prev) {
            left: 10px;
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
            display: flex;
            flex-direction: column;
          }

          .title {
            font-size: 2em;
          }

          .text {
            padding-bottom: 20px;
            padding-right: 30px;
            text-align: justify;
          }

          .slideButton {
            margin-top: auto;
          }

          :global(.outlineReverse:hover) {
            color: var(--elliotLink);
          }

          @media (min-width: 600px) {
            .slideWrap {
              display: flex;
            }

            .slideWrap img {
              width: 50%;
              height: 340px;
            }

            .slideContent {
              width: 50%;
              text-align: left;
            }
          }

          @media (min-width: 900px) {
            .slideWrap img {
              height: 400px;
            }
          }

          @media (min-width: 1200px) {
            .slideWrap img {
              height: 500px;
            }
          }

          @media (min-width: 1500px) {
            .slideWrap img {
              height: 600px;
            }
          }

          @media (min-width: 1850px) {
            .slideWrap img {
              height: 700px;
            }
          }
        `}
      </style>
    </div>
  )
}
