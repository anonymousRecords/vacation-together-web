import styled from "styled-components";

export default function SignitureBox() {
  return (
    <StyledSignitureBox>
      <div>이름</div>
      <input type="text" style={{ width: "100px" }} />
    </StyledSignitureBox>
  );
}

const StyledSignitureBox = styled.div`
  margin-top: 5px;
  width: 150px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  input {
    border: 1px solid black;
    border-radius: 3px;
  }
`;
