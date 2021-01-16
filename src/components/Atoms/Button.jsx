import React from 'react';
import styled from 'styled-components';

function Button(props) {
  let classNameArr = ['btn'];
  if (props.size) classNameArr.push(`btn-${props.size}`);
  if (props.type) classNameArr.push(props.type);
  return (
    <StyledButton {...props}>
      <button
        className={classNameArr.join(' ')}
        disabled={props.disabled}
        onClick={props.onClick}
      >{props.children}</button>
    </StyledButton>
  );
}

const StyledButton = styled.span`
  .btn {
    background: #fff;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colorGreyMediumLight};
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGrey};
    color: inherit;
    cursor: pointer;
    font-family: 'Advent Pro', sans-serif;
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
    height: ${({ height }) => height || 'auto'};
    margin: ${({ margin }) => margin || '0 4px'};
    outline: none;
    padding: ${({ padding }) => padding || '4px 10px'};
    transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;
    width: ${({ width }) => width || 'auto'};
    &:disabled {
      pointer-events: none;
      background: ${({ theme }) => theme.colorGreyLight} !important;
      border: 1px solid ${({ theme }) => theme.colorGreyMediumLight} !important;
      box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGreyMediumLight} !important;
    }
    &:hover {
      background: ${({ theme }) => theme.colorGreyMediumLight};
      border-color: ${({ theme }) => theme.colorGreyMediumLight};
      color: #fff;
    }
    &:active {
      box-shadow: 1px 1px 2px ${({ theme }) => theme.colorGrey};
    }
    &.btn-xs {
      padding: 0 2px;
      font-size: 0.6em;
    }
    &.btn-sm {
      padding: 2px 6px;
      font-size: 0.8em;
    }
    &.btn-md {
      padding: 2px 6px;
      font-size: 1em;
    }
    &.btn-lg {
      font-size: 1.2em;
    }
    &.clear {
      color: #fff;
      background: ${({ theme }) => theme.colorTransparent};
      border: 1px solid ${({ theme }) => theme.colorTransparent};
      &:hover {
        background: ${({ theme }) => theme.colorOpaque};
        border-color: ${({ theme }) => theme.colorOpaque};
      }
    }
    &.danger {
      color: #fff;
      background: ${({ theme }) => theme.colorDanger};
      border: 1px solid ${({ theme }) => theme.colorDanger};
      &:hover {
        background: ${({ theme }) => theme.colorDangerHover};
        border-color: ${({ theme }) => theme.colorDangerHover};
      }
    }
    &.primary {
      color: #fff;
      background: ${({ theme }) => theme.colorPrimary};
      border: 1px solid ${({ theme }) => theme.colorPrimary};
      &:hover {
        background: ${({ theme }) => theme.colorPrimaryHover};
        border-color: ${({ theme }) => theme.colorPrimaryHover};
      }
    }
    &.tertiary {
      color: #fff;
      background: ${({ theme }) => theme.colorPrimary};
      border: 1px solid ${({ theme }) => theme.colorPrimary};
      &:hover {
        background: ${({ theme }) => theme.colorPrimaryHover};
        border-color: ${({ theme }) => theme.colorPrimaryHover};
      }
    }
  }
`;

export default Button;
