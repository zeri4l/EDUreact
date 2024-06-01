/*
    1. props (properties)
        function 상위컴포넌트(){
            const value_1 = "값"
            const value_2 = "값"

            return (
                <div> // 리액트에서는 요소가 연달아 올 수 없다, wrapper로 감싸줘야함
                <> // Fragment, 키 값 못 줌
                <React.Fragment key={index}> // 속성 부여 가능
                    <하위컴포넌트/>
                    <하위컴포넌트/>
                </React.Fragment>
                </>
                </div>
            )
        }


    2. 구조분해할당
        -> 자바스크립트에서 데이터의 집단을 나타내는 대표적인 자료구조인 배열과 객체를
        -> 구조를 분해하여 각각의 요소를 변수로 표현하는 과정을 축약

        const A = {
            age: 20,
            height: 1
        }

        const age = A.age
        const height = A.height

        const {age, height} = A
        객체의 key에 맞는 할당이 이루어져야합니다

        console.log(age, height) // 20, 1

    const A = [20, 1]
    const [age, height] = A

    => 구조 분해를 할당하는 가장 큰 이유는 

        객체의 키값을 명시 -> 구성을 파악하기 쉽다
        데이터 집단의 값을 키(index, key)뿐만이 아니라 내가 원하는 이름으로 사용
        -> 다른 객체끼리에는 중복되는 키가 존재할 수 있어서 혼돈을 야기할 수 있다


    3. 나머지 매개변수 연산자
        function a(A, B, C, D, . . . .){
        }
        function a(A,B,...rest){
            console.log(rest) {C, D, E . . .}
        }
*/

import React from "react";
import styled, { css } from "styled-components";

// {label: "이메일", size: 3}
// props는 컴포넌트(함수)의 매개변수로 전달된다.
const FormInput = ({ label, size, containerStyle, ...props }) => {
  return (
    <S.InputBox style={containerStyle}>
      <S.InputLabel>FormInput</S.InputLabel>
      <S.Input $size={size} {...props} />
      {/* 나머지 매개변수 전달을 통한 input의 속성 값 전달*/}
    </S.InputBox>
  );
};
export default FormInput;

const sizeCSS = {
  1: css`
    width: 100px;
    height: 30px;
  `,
  2: css`
    width: 300px;
    height: 48px;
  `,
  3: css`
    width: 300%;
    height: 48px;
  `,
};

const SignInForm = () => {
  return (
    <S.Form>
      <S.InputBox>
        <S.InputLabel>이메일</S.InputLabel>
        <S.Input placeholder={"email"} />
      </S.InputBox>
      <S.InputBox>
        <S.InputLabel>비밀번호</S.InputLabel>
        <S.Input placeholder={"password"} />
      </S.InputBox>
    </S.Form>
  );
};

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

  border-radius: 4px;
  padding-left: 16px;
  ${(props) => sizeCSS[props.size]} // css문법
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
