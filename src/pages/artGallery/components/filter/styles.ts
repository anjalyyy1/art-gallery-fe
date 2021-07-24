import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 30%;
`;

export const FilterItem = styled.span<{ isActive: boolean }>`
  display: inline-block;
  padding: 7px 12px;
  border-radius: 20px;
  border: 1px solid ${props => (props.isActive ? 'transparent' : '#e1e1e1')};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 15px;
  min-width: 83px;
  background: ${props => (props.isActive ? '#e1e1e1' : 'white')};
  text-align: center;
`;
