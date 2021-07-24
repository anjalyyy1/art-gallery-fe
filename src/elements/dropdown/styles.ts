import styled from 'styled-components';

const SelectContainer = styled.div`
  width: 100%;
  &.color-code-select-input,
  &.gradient-select-input {
    .select__control {
      border-color: transparent;
      font-size: 12px;
      min-height: auto;
    }
    .select__control--is-focused {
      border-color: transparent;
      box-shadow: none;
    }
    .select__value-container {
      padding: 0 2px;
    }
    .select__menu {
      .select__option {
        font-size: 12px;
      }
    }
    .select__indicator {
      padding: 2px;
      svg {
        height: 15px;
        width: 15px;
      }
    }
    .custom-select {
      height: 25px;
      span {
        display: none;
      }
    }
  }
  &.gradient-select-input {
    width: 170px;
    margin-bottom: 10px;
  }
  &.font-weight-selector {
    .select__indicator-separator {
      width: 0;
    }
  }
`;

export { SelectContainer };
