import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

function Button(props) {
  const classes = classNames(props.className, props.classes, {
    disabled: !!props.disabled
  });
  return (
    <StyledButton className={classes} {...props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGrey};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0 4px'};
  padding: ${({ padding }) => padding || '6px 14px'};
  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;
  width: ${({ width }) => width || 'auto'};
  white-space: nowrap;
  &:active {
    box-shadow: 1px 1px 1px ${({ theme }) => theme.colorGrey};
  }
  &.disabled {
    color: ${({ theme }) => theme.colorGrey};
    pointer-events: none;
    background: ${({ theme }) => theme.colorGreyLight};
    border: 1px solid ${({ theme }) => theme.colorGreyLight};
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGreyMediumLight};
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
  /*&.primary {
    color: ${({ theme }) => theme.colorWhite};
    background: ${({ theme }) => theme.colorPrimary};
    border: 1px solid ${({ theme }) => theme.colorPrimary};
    &.empty {
      color: ${({ theme }) => theme.colorPrimary};
      background: ${({ theme }) => theme.colorTransparent};
    }
  }
  &.primary-hover {
    &:hover {
      background: ${({ theme }) => theme.colorPrimaryHover};
      border-color: ${({ theme }) => theme.colorPrimaryHover};
    }
  }
  &.secondary {
    color: ${({ theme }) => theme.colorWhite};
    background: ${({ theme }) => theme.colorSecondary};
    border: 1px solid ${({ theme }) => theme.colorSecondary};
    &.empty {
      color: ${({ theme }) => theme.colorSecondary};
      background: ${({ theme }) => theme.colorTransparent};
    }
  }
  &.secondary-hover {
    &:hover {
      background: ${({ theme }) => theme.colorSecondaryHover};
      border-color: ${({ theme }) => theme.colorSecondaryHover};
    }
  }
  &.tertiary {
    color: ${({ theme }) => theme.colorWhite};
    background: ${({ theme }) => theme.colorTertiary};
    border: 1px solid ${({ theme }) => theme.colorTertiary};
    &.empty {
      color: ${({ theme }) => theme.colorTertiary};
      background: ${({ theme }) => theme.colorTransparent};
    }
  }
  &.tertiary-hover {
    &:hover {
      background: ${({ theme }) => theme.colorTertiaryHover};
      border-color: ${({ theme }) => theme.colorTertiaryHover};
    }
  }
  &:disabled {
    pointer-events: none;
    background: ${({ theme }) => theme.colorGreyLight};
    border: 1px solid ${({ theme }) => theme.colorGreyMediumLight};
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGreyMediumLight};
  }*/
  /*.btn {
    background: inherit;
    //border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colorWhiteOpaque};
    //box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGrey};
    color: ${({ theme }) => theme.colorWhiteOpaque};
    cursor: pointer;
    //font-family: 'Advent Pro', sans-serif;
    font-size: ${({ fontSize }) => fontSize || 'inherit'};
    height: ${({ height }) => height || 'auto'};
    margin: ${({ margin }) => margin || '0 4px'};
    outline: none;
    padding: ${({ padding }) => padding || '6px 14px'};
    transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;
    width: ${({ width }) => width || 'auto'};
    &:disabled {
      pointer-events: none;
      background: ${({ theme }) => theme.colorGreyLight} !important;
      border: 1px solid ${({ theme }) => theme.colorGreyMediumLight} !important;
      box-shadow: 2px 2px 2px ${({ theme }) => theme.colorGreyMediumLight} !important;
    }
    &:hover {
      background: ${({ theme }) => theme.colorSecondary};
      color: #fff;
    }
    &:active {
      transform: scale(0.99, 0.99);
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
  }*/
`;

export default Button;
