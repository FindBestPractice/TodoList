import React from 'react';
import styled, { css } from 'styled-components';

export const Input = ({ id, label, placeholder, size, type, value, disabled, onChange }) => {
  return (
    <>
      {/* label은 선택사항 */}
      {label && <StLabel htmlFor={id}>{label}</StLabel>}
      <StInput
        id={id}
        placeholder={placeholder}
        type={type}
        size={size}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </>
  );
};

const StLabel = styled.label`
  position: relative;
  display: block;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const StInput = styled.input`
  ${({ size }) =>
    size === 'auth' &&
    css`
      padding: 11px 14px 11px 60px;
      background: #fafafa;
      height: 50px;
      width: 332px;
      margin-top: 6px;
    `}
  ${({ size }) =>
    size === 'addTodo' &&
    css`
      padding: 11px 14px 11px 14px;
      background: #ffffff;
      height: 40px;
      width: 332px;
    `}

  ${({ size }) =>
    size === 'updetaTodo' &&
    css`
      padding: 11px 14px 11px 14px;
      background: #ffffff;
      height: 40px;
      width: 100%;
      margin-bottom: 5px;
    `}

  border: 1.2px solid #dadada;
  border-radius: 6px;
  &:hover,
  &:focus {
    outline: none;
    border: 1.2px solid #256ef1;
  }
`;
