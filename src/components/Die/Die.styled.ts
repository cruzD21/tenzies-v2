import styled from "styled-components";

export const DieWrapper = styled.div`
  .die-container {
    height: 100px;
    width: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    margin: 1.5rem;
  }
  .die-container:nth-child(n + 4) {
    margin-top: auto;
  }
`;
