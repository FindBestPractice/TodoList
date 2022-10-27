const ErrorMessage = (statusCode) => {
  if (statusCode === 400) {
    return { emailErr: '이미 가입된 이메일입니다.' };
  }
  if (statusCode === 401) {
    return { passwordErr: '잘못된 비밀번호입니다.' };
  }
  if (statusCode === 404) {
    return { emailErr: '가입되지 않은 이메일입니다.' };
  }
};

export default ErrorMessage;
