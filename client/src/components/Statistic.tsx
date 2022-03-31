import withAnimation, { WithAnimationProps } from './mockups/withAnimation';
import { animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as StatisticStyle from 'styles/components/StatisticStyle';
import Icon from 'styles/custom/Icon';

export interface PlataformStatisticData {
  label: string;
  icon: string;
  value: number;
}

interface PlataformStatisticProps extends WithAnimationProps {
  data: PlataformStatisticData;
  index: number;
}

function PlataformStatistic({
  data,
  index,
  _ref,
  controls,
  inView,
}: PlataformStatisticProps) {
  const valueRef = useRef(null);
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);

  const animationProps = {
    initial: 'hidden',
    animate: controls,
    variants: {
      visible: { y: 0, opacity: 1 },
      hidden: { y: '-5vw', opacity: 0 },
    },
    transition: { duration: 1, delay: index * 0.25 },
  };

  useEffect(() => {
    if (inView) {
      if (!alreadyAnimated) {
        animate(0, data.value, {
          duration: 2,
          onUpdate(value = 0) {
            if (valueRef.current !== null)
              valueRef.current.textContent = value.toFixed(0);
          },
          onComplete() {
            setAlreadyAnimated(true);
          },
        });
      }
    }
  }, [controls, inView, valueRef]);

  return (
    <StatisticStyle.Container ref={_ref} {...animationProps}>
      <Icon size={80} color="blue-400" className={data.icon} />
      <StatisticStyle.Value ref={valueRef} />
      <StatisticStyle.Label>{data.label}</StatisticStyle.Label>
    </StatisticStyle.Container>
  );
}

export default withAnimation(PlataformStatistic);
