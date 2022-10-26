// TODO Input 컴포넌트 생성
const Input = (label, ...rest) => {
  return (
    <>
      {label}
      <input {...rest} />
    </>
  )
}

export default Input
