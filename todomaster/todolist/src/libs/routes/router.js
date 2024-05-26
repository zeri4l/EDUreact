import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main/main";
import { Todo } from "../../pages/todo/@todo";
// URL을 감지하여 내가 생성한 route에 맞게 컴포넌트를 전달하는 역할

const router = createBrowserRouter([
  // import { router } from "상대경로"
  // 내가 export한 변수나 함수명을 정확히 기재
  {
    path: "/",
    element: <Main />,
    // 컴포넌트 태그 형태로 사용해야한다
    // 컴포넌트명은 항상 첫 글자가 대문자여야함
  },
  {
    path: "/todo/:todoId",
    element: <Todo />,
  },
]);
export default router;
// import [가지고 올 이름] from "상대경로"
// 가지고 올 이름.createBrowserRouter

// 모듈
// 한가지 이상의 기능을 하는 코드의 집단을 분리한 것
// 코드를 분리하는 이유, 하나의 js 파일 내부가 아니라 다른 js에서도 파일을 사용할 수 있도록

//
