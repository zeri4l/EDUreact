import styled from "styled-components";
import FormInput from "../../../components/FormInput";
import TDButton from "../../../components/Button";

const SignInForm = () => {
  return (
    <S.Form>
      <FormInput label={"이메일"} placeholder={"email"} size={3} />
      <FormInput
        label={"비밀번호"}
        size={3}
        containerStyle={{
          width: 100,
        }}
      />

      {/* 스타일 가이드/디자인 시스템 -> 정해진 값으로 컴포넌트를 빠르게 생산 */}
      <TDButton variant={"primary"} size={"full"}>
        로그인
      </TDButton>
    </S.Form>
  );
};
export default SignInForm;

const Form = styled.form`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #000;
  width: 100%;
  border-radius: 4px;
  padding-left: 16px;
  height: 48px;
  &::placeholder {
    text-align: center;
  }
`;
const InputLabel = styled.label`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: aliceblue;
  z-index: 100;
  padding: 0 4px;
`;

const S = {
  Form,
  InputBox,
  InputLabel,
  Input,
};
