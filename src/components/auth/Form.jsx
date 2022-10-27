import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { apis } from '../../shared/axios';
import Button from '../../elements/Button';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Password } from '../../assets/password.svg';
import { Input } from '../../elements/Input';
import useInput from '../../hooks/useInput';
import { setToken } from '../../shared/token';

const Form = () => {
  const navigate = useNavigate();
  const [email, emailHandler, emailIsVaild, emailErrMsg] = useInput('email');
  const [password, passwordHandler, passwordIsVaild, passwordErrMsg] = useInput('password');

  // 초기 signin 탭에서 시작
  const [onSignIn, setOnSignIn] = useState(true);

  // signin, signup 탭 간 전환 함수
  const toggleTab = (e) => {
    setOnSignIn((prev) => !prev);
  };

  // 회원가입하기/ 로그인하기 버튼 클릭 시 처리 함수
  const submitHandler = async (e) => {
    e.preventDefault();

    let resp = {};
    // 로그인 API 호출
    if (onSignIn) resp = await apis.signIn({ email, password });
    // 회원 가입 API 호출
    else resp = await apis.signUp({ email, password });

    // 응답으로 받아온 토큰 로컬 스토리지 저장
    const { access_token } = resp.data;
    setToken(access_token);
    // /todo로 이동
    navigate('/todo');

    return;
  };

  return (
    <>
      <StLogo>Simple Todos</StLogo>
      <StHeader>
        <StTab>{onSignIn ? '로그인' : '회원가입'}</StTab>
        <StLink onClick={toggleTab}>{onSignIn ? '회원가입' : '로그인'}</StLink>
      </StHeader>
      <form onSubmit={submitHandler}>
        <StField hasError={!emailIsVaild}>
          <StLabel htmlFor="email">이메일</StLabel>
          <StHelper>@을 포함한 형태의 이메일을 기입해주세요.</StHelper>
          <StWrapper>
            <StIcon>
              <Email />
            </StIcon>
            <Input
              type="text"
              id="email"
              placeholder="username@address.com"
              onChange={emailHandler}
              value={email}
              func="auth"
            />
          </StWrapper>
          {emailIsVaild === false && <StError>{emailErrMsg}</StError>}
        </StField>
        <StField>
          <StLabel htmlFor="password">비밀번호</StLabel>
          <StHelper>8자 이상의 비밀번호를 기입해주세요.</StHelper>
          <StWrapper hasError={!passwordIsVaild}>
            <StIcon>
              <Password />
            </StIcon>
            <Input
              type="password"
              id="password"
              placeholder="*****"
              onChange={passwordHandler}
              value={password}
              func="auth"
            />
          </StWrapper>
          {passwordIsVaild === false && <StError>{passwordErrMsg}</StError>}
        </StField>
        <Button
          text={onSignIn ? '로그인하기' : '회원가입하기'}
          component="Form"
          type="submit"
          disabled={!emailIsVaild || !passwordIsVaild}
        />
      </form>
    </>
  );
};

export default Form;

const StFont = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const StLogo = styled(StFont)`
  font-family: 'Lobster';
  font-size: 50px;
  text-align: center;
  padding: 30px 120px;
  color: #256ef1;
`;

const StHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px 30px 0px;
`;

const StTab = styled(StFont)`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`;

const StLink = styled(StFont)`
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #656565;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    color: #256ef1;
    transform: scale(1.05);
  }
`;

const StField = styled.div`
  margin-bottom: ${(props) => (!props.hasError ? '36px' : '21px')};
`;

const StLabel = styled.label`
  position: relative;
  display: block;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

const StHelper = styled(StFont)`
  margin-top: 3px;
  font-size: 10px;
  line-height: 14px;
  color: #656565;
`;

const StWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const StIcon = styled.div`
  position: absolute;
  left: 25px;
  bottom: 10px;
`;

const StError = styled(StHelper)`
  color: #256ef1;
`;
