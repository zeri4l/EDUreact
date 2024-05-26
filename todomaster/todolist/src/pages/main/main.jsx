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

  return (
    <S.Wrapper>
      <S.Container>
        {/*container*/}
        {/*header*/}
        <S.Header>
          <S.Tab>SIGN-IN</S.Tab>
          <S.Tab>SIGN-UP</S.Tab>
        </S.Header>
        <SignInForm />
        <SignUpForm />
      </S.Container>
    </S.Wrapper>
  );
};
export default Main;

// 컴포넌트 앞 글자는 대문자로
// 스타일 된 요소를 생성해서
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
  background-color: aqua;
  display: flex;
`;
const Tab = styled.div`
  width: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  /* 
  div > section >  p
  div > section >  p > a

  div >  section > p {
      &(div > section > p) > a {
      }
  }
*/

  &:hover {
    background-color: aliceblue;
  }
`;

const S = {
  Wrapper,
  Container,
  Header,
  Tab,
};
