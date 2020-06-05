import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



import slider1 from '../slider/slider1.png';
import slider2 from '../slider/slider2.png';
import slider3 from '../slider/slider3.png';
import slider4 from '../slider/slider4.png';


import '../slider/slider.css';

const items = [
  {
    src: slider1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: slider2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: slider3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: slider4,
    altText: 'Slide 4',
    caption: 'Slide 4'
  }

];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <img src={item.src} alt={item.altText} id='eachSlide' />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div id='allSlider'>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        id='allSlider'
        
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}  />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}  />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>    
    </div>
  );
}

export default Slider;