import { StyledInput, Label, InputWrapper } from './styles';
import React, { FunctionComponent } from 'react';

type Props = {
  className?: string;
  /**
   * type of input
   */
  inputType?: string;
  /**
   * value of input
   */
  val?: any;
  /**
   * handles change event
   */
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * placeholder text
   */
  placeholder?: string;
  /**
   * Ref for the input
   */
  refVal?: React.RefObject<HTMLInputElement>;
  /**
   * default value for the input field
   */
  defaultValue?: string;
  /**
   * label for the input
   */
  inputLabel?: string;
  // icon
  icon?: any;
};

const Input: FunctionComponent<Props> = ({
  inputType,
  val,
  handleChange,
  placeholder,
  refVal,
  defaultValue,
  inputLabel,
  className,
  icon,
}) => {
  return (
    <InputWrapper className="input-wrapper">
      {!!inputLabel && <Label>{inputLabel}</Label>}
      {!!icon && icon}
      <StyledInput
        type={inputType}
        value={val}
        onChange={handleChange}
        className={`custom-input ${className}`}
        placeholder={placeholder}
        ref={refVal}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

Input.defaultProps = {
  inputType: 'text',
  className: '',
  handleChange: () => undefined,
};

export default Input;
