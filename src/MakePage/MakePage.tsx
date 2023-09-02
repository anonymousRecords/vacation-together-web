import styled from "styled-components";
import ModalOverlay from "./components/ModalOverlay";
import { useState } from "react";
import StartModal from "./components/StartModal";
import Header from "../common/components/Header";
import { useNavigate } from "react-router-dom";
import Question from "./components/Question";

const MakePage = () => {
  // Start 모달창
  const [showStartModal, setShowStartModal] = useState(true);

  // const showStartModalHandler = () => {
  //   setShowStartModal(true);
  // };

  const hideStartModalHandler = () => {
    setShowStartModal(false);
  };

  // useNavigate
  const navigate = useNavigate();

  return (
    <StyledMakePage>
      <Header
        title="계약서 작성하기"
        onBack={() => {
          navigate("/enter");
        }}
      />
      <Question />

      {/* Start 모달창 */}
      <ModalOverlay
        blur
        onHideModal={hideStartModalHandler}
        show={showStartModal}
      >
        <StartModal onHideModal={hideStartModalHandler} />
      </ModalOverlay>
      <CompleteButton
        onClick={() => {
          navigate("/complete");
        }}
      >
        작성 완료하기
      </CompleteButton>
    </StyledMakePage>
  );
};

const StyledMakePage = styled.div`
  min-width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompleteButton = styled.button`
  width: 313px;
  height: 54px;
  border-radius: 8px;
  background: #000;
  margin-top: 30px;

  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default MakePage;
