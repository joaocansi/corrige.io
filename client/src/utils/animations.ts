import { AnimationControls } from 'framer-motion';

export const FunctionalityAnimations = (controls: AnimationControls) => {
  return [
    {
      initial: 'hidden',
      animate: controls,
      transition: { duration: 1 },
      variants: {
        visible: {
          y: 0,
          opacity: 1,
        },
        hidden: {
          y: '-5vw',
          opacity: 0,
        },
      },
    },
    {
      initial: 'hidden',
      animate: controls,
      transition: { duration: 1, delay: 0.2 },
      variants: {
        visible: {
          y: 0,
          opacity: 1,
        },
        hidden: {
          y: '-2.5vw',
          opacity: 0,
        },
      },
    },
    {
      initial: 'hidden',
      animate: controls,
      transition: { duration: 1, delay: 0.2 },
      variants: {
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: '-2.5vw',
          opacity: 0,
        },
      },
    },
    {
      initial: 'hidden',
      animate: controls,
      transition: { duration: 1, delay: 0.4 },
      variants: {
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: '-2.5vw',
          opacity: 0,
        },
      },
    },
    {
      initial: 'hidden',
      animate: controls,
      transition: { duration: 1, delay: 0.6 },
      variants: {
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: '-2.5vw',
          opacity: 0,
        },
      },
    },
  ];
};

export const mainAnimations = {
  initial: { y: '2.5vw', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7 },
};

export const homeSectionAnimations = [
  {
    initial: { x: '2.5vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7 },
  },
  {
    initial: { x: '-2.5vw', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7 },
  },
];

export const formAnimations = (index: number) => {
  return {
    initial: {
      y: '2.5vw',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.7,
      delay: index * 0.2,
    },
  };
};

export const cleanHeaderLogoAnimation = {
  initial: {
    x: '2.5vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 0.7 },
};

export const cleanHeaderBackIconAnimation = {
  initial: {
    x: '-2.5vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 0.7 },
};
