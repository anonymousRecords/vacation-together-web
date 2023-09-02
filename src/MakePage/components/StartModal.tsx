import styled from "styled-components";

interface StartModalProps {
  onHideModal: () => void;
}

export default function StartModal(props: StartModalProps) {
  const { onHideModal } = props;

  return (
    <ModalWrapper>
      <ModalContainer>
        <StartModalGuideTitle>
          바캉스 계약서 작성을 위해<br/>여행 스타일을 알려주세요
        </StartModalGuideTitle>
        <StartButton onClick={onHideModal}>시작하기</StartButton>
      </ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.article`
  background-color: white;
  margin: auto;
  width: 240px;
  height: 180px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  width: 240px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StartModalGuideTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const StartButton = styled.button`
  width: 180px;
  height: 32px;
  border-radius: 3px;
  margin: 8px 0 3px 0;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
