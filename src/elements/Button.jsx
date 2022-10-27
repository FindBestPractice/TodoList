import styled, { css } from 'styled-components';

const Button = ({ component, text, ...rest }) => {
  return (
    <>
      <StButton component={component} {...rest}>
        {text}
      </StButton>
    </>
  );
};

export default Button;

const componentType = {
  Form: css`
    width: 329px;
    height: 50px;
    background: ${(props) => (!props.disabled ? '#256ef1' : '#a5a5a54a')};
    border: ${(props) => (!props.disabled ? '1px solid #256ef1' : '1px solid #a5a5a54a')};
    color: #ffffff;
    &:hover {
      cursor: ${(props) => (!props.disabled ? 'pointer' : 'default')};
      transform: ${(props) => (!props.disabled ? 'scale(1.05)' : 'none')};
    }
  `,
  CreateTodo: css`
    width: 90px;
    height: 40px;
    background: ${(props) => (!props.disabled ? '#256ef1' : '#a5a5a54a')};
    border: ${(props) => (!props.disabled ? '1px solid #256ef1' : '1px solid #a5a5a54a')};
    color: #ffffff;
    &:hover {
      cursor: ${(props) => (!props.disabled ? 'pointer' : 'default')};
      transform: ${(props) => (!props.disabled ? 'scale(1.05)' : 'none')};
    }
  `,
  ReadUpdateTodo: css`
    width: calc(100% - 40px - 10px);
    min-width: 65px;
    height: 30px;
    background: #f3f3f3;
    color: black;
    border: none;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      background: #256ef1;
      color: #ffffff;
    }
  `,
};

const StButton = styled.button`
  border-radius: 6px;
  transition: all 0.3s;
  ${({ component }) => componentType[component]}
`;

StButton.defaultProps = {
  component: 'CreateTodo',
};
