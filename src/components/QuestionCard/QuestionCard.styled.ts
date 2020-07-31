import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 110rem;
  background: #ebfeff;
  border-radius: 1rem;
  border: 2px solid #0085a3;
  padding: 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: black;
  p {
    font-size: 1.2rem;
  }
`;
type BottomWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};
export const BottomWrapper = styled.div<BottomWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  .btn-options {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 4rem;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,#0f9b0f,#0f9b0f)"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5656,#c16868)"
        : "linear-gradient(90deg,#56ccff,#6eafb4)"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.5);
  }
`;
