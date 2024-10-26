import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
function StyledComponents(props) {
  //   const StyledButton = styled.button`
  //     background-color: "red";
  //   `;
  const StyledButton = styled.button({
    backgroundColor: "green",
  });
  //global style
  const GlobalStyle = createGlobalStyle`
    body{
      background-color: black;
    }
  `;
  const LargeButton = styled(StyledButton)``;
  const Pihu = styled.div`
    background-color: black;
    color: green;
    .abc {
      color: red;
    }
  `;
  return (
    <div>
      <Pihu>
        pihuu
        <p className="abc">abc</p>
      </Pihu>
      <StyledButton>Follow me</StyledButton>
      {/* <GlobalStyle></GlobalStyle> */}
      <LargeButton>heyy</LargeButton>
    </div>
  );
}

export default StyledComponents;
