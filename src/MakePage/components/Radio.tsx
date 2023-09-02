import styled from "styled-components";

interface RadioProps {
    groupName: string
}

export default function Radio({ groupName } :RadioProps) {
  return (
    <ToggleBox>
      <Toggle>
        <input type="radio" name={groupName} id={`yes-${groupName}`} />
        <label htmlFor={`yes-${groupName}`}>예</label>
      </Toggle>
      <Toggle>
        <input type="radio" name={groupName} id={`no-${groupName}`} />
        <label htmlFor={`no-${groupName}`}>아니오</label>
      </Toggle>
    </ToggleBox>
  );
}

const ToggleBox = styled.div`
  width: 328px;
  height: 45px;
  margin-bottom: 10px;
  display: flex;
  gap: 15px;

`;

const Toggle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;


  /* 체크된 상태일 때 라디오 버튼 색상 변경 */
  input[type="radio"]:checked + label::before {
    background-color: #33FF00;
  }

  input[type="radio"] {
    width: 20px; 
    height: 20px; 
    appearance: none; 
    border: 2px solid #000; 
    border-radius: 50%; 
    outline: none; 
  }

  /* 체크된 상태 */
  input[type="radio"]:checked {
    background-color: #33FF00; 
    border-color: #000;
  }
};

`;