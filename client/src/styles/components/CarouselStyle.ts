import styled from 'styled-components';

interface CarouselContainerProps {
  width?: number;
}

interface CarouselSlideProps {
  current: number;
}

const Container = styled.div<CarouselContainerProps>`
  width: 100%;
  max-width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  overflow: hidden;
  position: relative;
`;

const Slide = styled.div<CarouselSlideProps>`
  width: 100%;
  display: flex;
  position: relative;
  transition: right 0.5s ease;
  right: ${(props) => (props.current ? `${props.current * 100}%` : 0)};
`;

const Indicators = styled.div<{ $indicatorsColor?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  i {
    font-size: var(--text-2xl);
    color: ${(props) =>
      props.$indicatorsColor
        ? `var(--${props.$indicatorsColor})`
        : `var(--white)`};
    cursor: pointer;
    text-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  flex: none;
`;

export { Indicators, Container, Slide, Image };
