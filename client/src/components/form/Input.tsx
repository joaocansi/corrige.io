import { TargetAndTransition, Transition } from 'framer-motion';
import { Dispatch, InputHTMLAttributes, SetStateAction, useRef } from 'react';
import { InputContainer } from 'styles/components/form/InputStyle';
import Icon from 'styles/custom/Icon';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  setState?: Dispatch<SetStateAction<string>>;
  initial?: object;
  animate?: TargetAndTransition;
  transition?: Transition;
}

export function Input({
  icon,
  animate,
  transition,
  setState,
  initial,
  ...rest
}: LoginInputProps) {
  const inputRef = useRef(null);

  return (
    <InputContainer initial={initial} transition={transition} animate={animate}>
      {icon ? (
        <Icon
          color="gray-800"
          size={22}
          onClick={() => inputRef.current?.focus()}
          className={icon}
          mr={2}
          pointer
        />
      ) : null}
      <input
        onChange={(e) => {
          setState ? setState(e.target.value) : {};
        }}
        ref={inputRef}
        {...rest}
      />
    </InputContainer>
  );
}

export default Input;
