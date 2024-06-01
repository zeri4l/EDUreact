/*
    1. 컴포넌트 버튼은 variant, size, shape 값을 전달받습니다
    2. variant -> primary, secondary, primary-text
    3. size -> small, medium, full
    4. shape -> shape, round

    5. primary -> 배경 녹색, 글자 흰색
    6. secondary -> 배경 파란색, 글자 흰색
    7. primary-text -> 글자만 녹색, 배경x

    8. small -> padding: 16px
    9. medium -> padding: 32px
    10. full -> width: 100%, aspect-ratio: 8/1

    11. 나머지 매개변수 사용할 것
    12. <button>텍스트</button> -> ({children})

    ex) 
    const TDButton = ({variant, size, shape children, ...rest}) => {
        return(
            <S.Button
                variant={variant}>
            {children}
            //해당 컴포넌트가 감싸고 있는 것은 children을 자동전달
            </S.Button>
        )
    }
    <TDButton variant={'primary'} size={'full'} shape={'shape'}>
        회원가입
    </TDButton>

    <button>텍스트</button> -> ({children})

*/

import styled, { css } from "styled-components";

// variant에 따라 css가 변경 -> variantCSS

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    ${(props) => shapeCSS[props.shape]} /*
    {(props)=> variant[props.variant]}
    {(props)=> variant[props.size]}
    {(props)=> variant[props.shape]}

*/
`;

const TDButton = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape}>
      {children}
    </Button>
  );
};

export default TDButton;

const variantCSS = {
  primary: css`
    background-color: green;
    color: white;
  `,
  secondary: css`
    background-color: blue;
    color: white;
  `,
  "primary-Text": css`
    color: green;
    background-color: transparent;
    outline: none;
  `,
};

const sizeCSS = {
  small: css`
    padding: 16px;
  `,
  medium: css`
    padding: 16px 32px;
  `,
  full: css`
    width: 100%;
    aspect-ratio: 8 / 1; // 가로 8 세로 1
  `,
};

const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

<TDButton variant={"primary"} size={"full"} shape={"shape"}>
  회원가입
</TDButton>;
