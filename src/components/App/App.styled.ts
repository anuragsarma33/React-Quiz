import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%;
    box-sizing: border-box;
    font-size: 10px;
}

body {
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
    font-family: 'Catamaran', sans-serif;
    font-weight: 500;
    color: beige;
    font-size: 4rem;
    margin:0;
    padding:0 2rem;
    display:flex;
    justify-content:center;
  }
  
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;

    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    color: #000;
    background-size: 100%;
    background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 7rem;
    text-align: center;
    margin: 2rem;
  }
  .btn-start,
  .btn-next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-sizing: 0 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 4rem;
    margin: 2rem 0;
    padding: 0 4rem;
  }
  .btn-start {
    max-width: 20rem;
    font-size: 2rem;
  }
  .btn-next {
    font-size: 2.5rem;
  }
`;
