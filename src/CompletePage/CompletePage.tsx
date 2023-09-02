import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../common/components/Header";
import Contract from "./components/Contract";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const CompletePage: React.FC = () => {
  // 다운로드
  const cardRef = useRef<HTMLImageElement | null>(null);
  const onDownloadButton = () => {
    const card = cardRef.current;
    if (!card) {
      return;
    }
    const filter = (node: Node) => {
      if (node instanceof Element) {
        return node.tagName !== "BUTTON";
      }
      return true;
    };
    domtoimage.toBlob(card, { filter: filter }).then((blob) => {
      saveAs(blob, "card.png");
    });
  };

  return (
    <StyledCompletePage>
      <Header title="계약서 확인하기" onBack={() => "/make"} />
      <Contract cardRef={cardRef} />
      <DownloadButton onClick={onDownloadButton}>다운로드</DownloadButton>
    </StyledCompletePage>
  );
};

const StyledCompletePage = styled.div`
  min-width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DownloadButton = styled.button`
  width: 313px;
  height: 54px;
  border-radius: 8px;
  background: #000;
  margin-top: 10px;

  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default CompletePage;
