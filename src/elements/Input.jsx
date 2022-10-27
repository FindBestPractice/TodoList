import React from 'react';
import styled, { css } from 'styled-components';

export const Input = ({ id, label, placeholder, func, type, value, disabled, onChange }) => {
  return (
    <>
      {/* label은 선택사항 */}
      {label && <StLabel htmlFor={id}>{label}</StLabel>}
      <StInput
        id={id}
        placeholder={placeholder}
        type={type}
        func={func}
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
  ${({ func }) =>
    func === 'auth' &&
    css`
      padding: 11px 14px 11px 60px;
      background: #fafafa;
      height: 50px;
      width: 332px;
      margin-top: 6px;
    `}
  ${({ func }) =>
    func === 'addTodo' &&
    css`
      padding: 11px 14px 11px 14px;
      background: #ffffff;
      height: 40px;
      width: 332px;
    `}

  ${({ func }) =>
    func === 'updateTodo' &&
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
