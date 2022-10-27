import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apis } from '../../shared/axios';
import Button from '../../elements/Button';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Password } from '../../assets/password.svg';
import { Input } from '../../elements/Input';

const Form = (props) => {
  const navigate = useNavigate();

  // TODO Assignment 3: 로그인 여부에 따른 리다이렉트 처리
  const checkToken = () => {
    if (!localStorage.getItem('AccessToken')) {
      return;
    }
    // 토큰 존재하는 경우 /todo로 리다이렉트
    navigate('/todo');
  };

  useEffect(() => {
    checkToken();
  }, []);

  // 초기 signin 탭에서 시작
  const [onSignIn, setOnSignIn] = useState(true);

  // form 관련 상태값
  const [form, setForm] = useState({
    email: '',
    password: '',
    emailErr: '',
    passwordErr: '',
  });

  // signin, signup 탭 간 전환 함수
  const toggleTab = (e) => {
    setOnSignIn((prev) => !prev);

    // 초기화
    setForm({
      email: '',
      password: '',
      emailErr: '',
      passwordErr: '',
    });
  };

  // form input field 값이 변화할 때마다 이를 반영하는 함수
  const changeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    const fieldErr = `${e.target.id}Err`;
    const hasErr = checkErr(field, value);
    setForm((prev) => ({
      ...prev,
      [field]: value,
      [fieldErr]: hasErr,
    }));
  };

  // TODO Assignment 1: 이메일과 비밀번호 유효성 검사 기능
  // 실시간 email, password field 유효성 검사
  const checkErr = (field, value) => {
    if (field === 'email') {
      return !value.includes('@') ? '이메일은 @를 반드시 포함해야합니다.' : '';
    }
    if (field === 'password') {
      return value.length < 8 ? '비밀번호는 반드시 8자 이상이어야합니다' : '';
    }
    return '';
  };

  // 회원가입하기/ 로그인하기 버튼 클릭 시 처리 함수
  const submitHandler = async (e) => {
    e.preventDefault();

    let resp = {};
    // TODO Assignment 2: 로그인 API 호출하고 올바른 응답 받으면 /todo 경로 이동
    // 로그인 API 호출
    if (onSignIn) {
      resp = await apis.signIn({
        email: form.email,
        password: form.password,
      });
    }
    // 회원 가입 API 호출
    else {
      resp = await apis.signUp({
        email: form.email,
        password: form.password,
      });
    }

    // 응답으로 받아온 토큰 로컬 스토리지 저장
    const { access_token } = resp.data;
    localStorage.setItem('AccessToken', access_token);
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
        <StField hasError={form.emailErr}>
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
              onChange={changeHandler}
              value={form.email}
              func="auth"
            />
          </StWrapper>
          {form.emailErr && <StError>{form.emailErr}</StError>}
        </StField>
        <StField>
          <StLabel htmlFor="password">비밀번호</StLabel>
          <StHelper>8자 이상의 비밀번호를 기입해주세요.</StHelper>
          <StWrapper hasError={form.passwordErr}>
            <StIcon>
              <Password />
            </StIcon>
            <Input
              type="password"
              id="password"
              placeholder="*****"
              onChange={changeHandler}
              value={form.password}
              func="auth"
            />
          </StWrapper>
          {form.passwordErr && <StError>{form.passwordErr}</StError>}
        </StField>
        <Button
          text={onSignIn ? '로그인하기' : '회원가입하기'}
          component="Form"
          type="submit"
          disabled={form.emailErr || form.passwordErr}
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
