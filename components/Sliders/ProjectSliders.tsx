import Slider from 'react-slick'
import ButtonOutline from '../Buttons/ButtonOutline'
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />
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
    <div className='slickWrapper'>
      <Slider {...settings}>
        {slides.map(({ title, text, image, ctaLabel, ctaLink }, index) => (
          <div key={index}>
            <div className='slideWrap'>
              <img src={image.url} alt={image.title} />
              <div className='slideContent'>
                <h3>{title}</h3>
                <p>{text}</p>
                {ctaLabel && <ButtonOutline href={ctaLink}>{ctaLabel}</ButtonOutline>}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>
        {`
          .slickWrapper {
            height: 500px;
            width: 100%;
            position: relative;
          }

          :global(.slick-slider) {
            position: absolute;
            width: 100%;
          }

          :global(.slick-dots) {
            bottom: 20px;
          }

          .slideWrap {
            display: flex;
          }

          .slideWrap img {
            width: 50%;
            max-height: 500px;
          }

          .slideContent {
            padding: 20px;
            text-align: left;
          }
        `}
      </style>
    </div>
  )
}
