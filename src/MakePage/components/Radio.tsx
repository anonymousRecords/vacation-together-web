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
  display: flex;
  gap: 10px;
`;

const Toggle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;