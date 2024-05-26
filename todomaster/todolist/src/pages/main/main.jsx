import styled from "styled-components";
import SignUpForm from "./_components/SignUpform";
import SignInForm from "./_components/SignInForm";

/*
컴포넌트를 나누는 기준

1. 재사용
2. 가독성
3. 단일 기능
4. 렌더링 최적화
    -> 리렌더링 (함수 재실행) 
    -> 내가 리렌더링하고 싶은 함수(컴포넌트)가 아니라면 렌더링해서는 안 된다


=> 코드를 치기 전에 컴포넌트 구조를 구상 (완벽하지는 않아고 괜찮습니다.)
=> 코드를 치면서, 리뷰를 받으면서 컴포넌트 구조를 수정

*/

const Main = () => {
  // 컴포넌트 -> 레이아웃, 회원가입 폼, 로그인 폼, 인풋 , 버튼
  // 만약에 컴포넌트 나누느넥 익숙하지 않다면 -> 한번에 작성했다가 이후에 나눠도 ok
  let formState = "SIGN-IN";
  // let isFormSignIn = true

  const TAB_ARRAY = [
    {
      name: "SIGN-IN",
    },
    {
      name: "SIGN-UP",
    },
  ];

  const onClickSignTab = (tabName) => {
    formState = tabName;
  };
  /* const onClickSignTab = () => {} */

  return (
    <S.Wrapper>
      <S.Container className={formState === "SIGN-IN" ? "" : ""}>
        {/*container*/}
        {/*header*/}
        <S.Header>
          {TAB_ARRAY.map((tab, index) => (
            <S.Tab
              key={index}
              $isSelected={formState === tab.name}
              onClick={() => onClickSignTab(tab.name)}
            >
              {tab.name}
            </S.Tab>
          ))}
        </S.Header>
        {formState === "SIGN-IN" ? <SignInForm /> : <SignUpForm />}
      </S.Container>
    </S.Wrapper>
  );
};
export default Main;

// 컴포넌트 앞 글자는 대문자로 만들어야한다
// 스타일 된 요소를 생성해서 컴포넌트화 한다 === styled conponents
const Wrapper = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 360px;
  border: 1px solid #999;
`;
const Header = styled.div`
  background-color: #4455dd;
  display: flex;
`;
const Tab = styled.div`
  width: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.$isSelected && "background-color: #e0e0e0; "}
  /* background-color: ${(props) => props.isSelected && "#e0e0e0"}; */
  /* &&: 조건부 연산자(true면 &&뒤의 코드를 실행) */

  border: 2px;
  font-size: 30px;

  /* 
  div > section >  p
  div > section >  p > a

  div >  section > p {
      &(div > section > p) > a {
      }
  }
*/

  &:hover {
    background-color: pink;
  }
`;

const S = {
  Wrapper,
  Container,
  Header,
  Tab,
};
