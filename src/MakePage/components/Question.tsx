import styled from "styled-components";
import { QuestionList } from "./QuestionList";
import Radio from "./Radio";

export default function Question() {
  return (
    <StyledQuestion>
      {QuestionList.map((item, index) => (
        <>
          <QuestionText key={index}>{item.q}</QuestionText>
          <Radio groupName={`group-${index}`} />
        </>
      ))}
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  width: 328px;
  height: 400px;
`;

const QuestionText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
