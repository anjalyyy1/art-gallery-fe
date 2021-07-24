import { FunctionComponent } from 'react';
import { StyledSpinnerContainer, StyledSpinner } from './styles';
import { GenericObject } from 'ts/types';

type Props = {
  fontSize?: number | string;
  className?: string;
  style?: GenericObject;
};

const Spin: FunctionComponent<Props> = ({ fontSize, className, style }) => {
  return (
    <StyledSpinnerContainer
      style={style}
      className={className}
      fontSize={fontSize}
    >
      <StyledSpinner />
    </StyledSpinnerContainer>
  );
};

export default Spin;
