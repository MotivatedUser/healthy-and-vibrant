import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialData from './TestimonialData';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className="testimonial-slider">
      <h2 className="testimonial-slider__title">Testimonials</h2>
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slider__item">
            <div className="testimonial-slider__content">
              <p className="testimonial-slider__comment">{testimonial.comment}</p>
              <p className="testimonial-slider__name">
                {testimonial.name}, {testimonial.location}
              </p>
              <p className="testimonial-slider__rating">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
