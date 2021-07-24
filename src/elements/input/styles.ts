import styled from 'styled-components';

const StyledInput = styled.input<{
  showArrows?: boolean;
}>`
  padding: 8px 4px;
  border-radius: 5px;
  background: ${props => props.theme.COLOR_PALETTE.WHITE};
  border: 1px solid grey;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.COLOR.PRIMARY_COLOR};
  }
`;

const Label = styled.label``;

const RequiredMark = styled.span``;

const InputWrapper = styled.div``;

export { StyledInput, Label, RequiredMark, InputWrapper };
