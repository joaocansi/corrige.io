import withAnimation, { WithAnimationProps } from './mockups/withAnimation';
import * as BenefitStyle from 'styles/components/BenefitStyle';
import Icon from 'styles/custom/Icon';

interface BenefitData {
  icon: string;
  description: string;
}

interface BenefitProps extends WithAnimationProps {
  data: BenefitData;
  index: number;
}

function Benefit({ data, index, _ref, controls }: BenefitProps) {
  const animationProps = {
    initial: 'hidden',
    animate: controls,
    variants: {
      visible: { y: 0, opacity: 1 },
      hidden: { y: '-5vw', opacity: 0 },
    },
    transition: { duration: 1, delay: index * 0.25 },
  };

  return (
    <BenefitStyle.Container ref={_ref} {...animationProps}>
      <Icon size={100} color="blue-400" pointer className={data.icon} />
      <BenefitStyle.Description>{data.description}</BenefitStyle.Description>
    </BenefitStyle.Container>
  );
}

export default withAnimation(Benefit);
