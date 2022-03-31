import { WithAnimationProps } from './mockups/withAnimation';
import * as FunctionalityStyle from 'styles/components/FunctionalityStyle';

interface FunctionalityProps extends WithAnimationProps {
  data: IFunctionality;
}

export interface IFunctionality {
  index: number;
  title: string;
  description: string;
}

function Functionality({ data }: FunctionalityProps) {
  return <FunctionalityStyle.Container></FunctionalityStyle.Container>;
}

export default Functionality;
