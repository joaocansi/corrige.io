import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  useAnimation,
} from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export interface WithAnimationProps {
  _ref?: (node?: Element) => void;
  controls?: AnimationControls;
  inView?: boolean;
}

export interface BasicMotionProps {
  initial?: object;
  animate?: TargetAndTransition;
  transition?: Transition;
}

function withAnimation<T>(Wrapped: React.FC<T>) {
  return (props: T) => {
    const [ref, inView] = useInView();

    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return (
      <Wrapped inView={inView} _ref={ref} controls={controls} {...props} />
    );
  };
}

export default withAnimation;
