import { SelectContainer } from './styles';
import { ActionMeta, default as ReactSelect } from 'react-select';
import React, { FunctionComponent } from 'react';
import { GenericObject } from 'ts/types';

type option = {
  label: string;
  value: string;
};

type Props = {
  /**
   * handles change event
   */
  handleChange?: (value: any, actionMeta: ActionMeta<option>) => void;
  /**
   * select list option with the key value pair of label and value --> { label: string, value: string }
   */
  options: option[];
  /**
   *  selected option from the dropdown
   */
  selectedOption?: option | option[];
  /**
   *  states whether the user will be able to select multiple values
   */
  multiple?: boolean;
  /**
   * Placeholder to be rendered
   */
  placeholder?: string;
  /**
   * classname for the dropdown
   */
  className?: string;
  /**
   * whether the selected option should be clearable or not
   */
  isClearable?: boolean;
  /**
   * Customisable options
   */
  customProps?: GenericObject;

  disabled?: boolean;
  /**
   * Label for the dropdown
   */
  label?: string;
  /**
   * Whether field is required
   */
  required?: boolean;
};

const Dropdown: FunctionComponent<Props> = ({
  selectedOption,
  handleChange,
  options,
  multiple,
  placeholder,
  className,
  isClearable,
  customProps,
  disabled,
  label,
  required,
}) => {
  return (
    <SelectContainer className={className}>
      {!!label && (
        <label>
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      <ReactSelect
        className="custom-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isMulti={multiple}
        menuPlacement={'auto'}
        placeholder={placeholder}
        classNamePrefix="select"
        isClearable={isClearable}
        isDisabled={disabled}
        {...customProps}
      />
    </SelectContainer>
  );
};

Dropdown.defaultProps = {
  multiple: false,
  placeholder: '',
  className: '',
  isClearable: true,
  customProps: {},
};

export default Dropdown;
