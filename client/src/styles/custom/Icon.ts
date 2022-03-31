import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IconProps {
  size: number;

  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;

  color: string;
  colorHovered?: string;

  width?: number;
  height?: number;

  pointer?: boolean;
  align?: 'center' | 'right' | 'left';
}

const Icon = styled(motion.i)<IconProps>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};

  font-size: ${(props) => `${props.size}px`};
  text-align: ${(props) => (props.align ? props.align : 'left')};

  color: ${(props) => `var(--${props.color})`};
  transition: color 0.2s;

  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : 0)};
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : 0)};
  margin-right: ${(props) => (props.mr ? `${props.mr}rem` : 0)};
  margin-left: ${(props) => (props.ml ? `${props.ml}rem` : 0)};

  &:hover {
    color: ${(props) =>
      props.colorHovered
        ? `var(--${props.colorHovered})`
        : `var(--${props.color})`};
  }

  ${(props) => (props.pointer ? { cursor: 'pointer' } : {})}
`;

export default Icon;
