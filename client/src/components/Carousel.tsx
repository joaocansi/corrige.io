import { useState } from 'react';
import withAnimation, { WithAnimationProps } from './mockups/withAnimation';

import * as CarouselStyle from 'styles/components/CarouselStyle';

interface CarouselProps extends WithAnimationProps {
  images: CarouselData[];
  indicatorsColor?: string;
  width?: number;
}

interface CarouselData {
  image: string;
  alt?: string;
}

function Carousel({ images, _ref, width, indicatorsColor }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const imagesLength = images.length;

  const nextImage = () =>
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  const previusImage = () =>
    setCurrent(current === 0 ? imagesLength - 1 : current - 1);

  return (
    <CarouselStyle.Container width={width} ref={_ref}>
      <CarouselStyle.Indicators $indicatorsColor={indicatorsColor}>
        <i onClick={previusImage} className="fas fa-arrow-left"></i>
        <i onClick={nextImage} className="fas fa-arrow-right"></i>
      </CarouselStyle.Indicators>
      <div>
        <CarouselStyle.Slide current={current}>
          {images.map((item) => {
            return (
              <CarouselStyle.Image
                src={item.image}
                alt={item.alt}
                key={`carousel-${Math.floor(Math.random() * 10001)}`}
              />
            );
          })}
        </CarouselStyle.Slide>
      </div>
    </CarouselStyle.Container>
  );
}

export default withAnimation(Carousel);
