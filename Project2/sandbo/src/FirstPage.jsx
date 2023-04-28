import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.main``;

const WelcomeText = Styled.h1`
color:red;
`;
const BigWelcomeText = Styled(WelcomeText)`
font-size:4rem;
color:black;
background-color:red;
`;

const TodoInput = Styled.input`
width:288px;
height:64px;
`;
const Label = Styled.label`
color:#232323;
font-size:1.34rem;
`;

const FirstPage = () => {
  return (
    <Wrapper>
      <WelcomeText>환영합니다</WelcomeText>
      <BigWelcomeText>진짜환영함</BigWelcomeText>
      <Label htmlFor="name">
        해야할일을 적어보세요.
        <TodoInput
          type="text"
          name="name"
          id="name"
          autoFocus={true}
          autoComplete={false}
        />
      </Label>
    </Wrapper>
  );
};

export default FirstPage;
