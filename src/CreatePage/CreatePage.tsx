import styled from "styled-components";
import CustomInput from "./components/CreateInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePage = () => {
  const navigate = useNavigate();

  // 바캉스 이름
  const [vacanceName, setVacanceName] = useState('');
  // console.log("바캉스 이름", vacanceName)
  // 바캉스 비밀번호
  const [vacancePassword, setVacancePassword] = useState('');
  // console.log("바캉스 비밀번호", vacancePassword)
  // 바캉스 비밀번호 확인
  const [vacancePasswordConfirm, setVacancePasswordConfirm] = useState('');
  // console.log("바캉스 비밀번호 확인", vacancePasswordConfirm)

  return (
    <StyledCreatePage>
      <img
        src="/assets/image/logo-green.png"
        style={{ width: "136px", height: "160px" }}
      />
      <InputContainer>
        {/* 바캉스 이름 */}
        <CustomInput
          placeholderText="Vaction Name"
          backgroundImageURL="/assets/icon/vacance-name.svg"
          value={vacanceName}
          onChange={(e) => setVacanceName(e.target.value)}
        />
        {/* 바캉스 비밀번호 */}
        <CustomInput
          placeholderText="Password"
          backgroundImageURL="/assets/icon/password.svg"
          value={vacancePassword}
          onChange={(e) => setVacancePassword(e.target.value)}
        />
        {/* 바캉스 비밀번호 확인*/}
        <CustomInput
          placeholderText="Password Confirm"
          backgroundImageURL="/assets/icon/password.svg"
          value={vacancePasswordConfirm}
          onChange={(e) => setVacancePasswordConfirm(e.target.value)}
        />
      </InputContainer>
      <CreateButton
        onClick={() => {
          navigate("/enter");
        }}
      >
        바캉스 생성하기
      </CreateButton>
    </StyledCreatePage>
  );
};

const StyledCreatePage = styled.div`
  min-width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e6ecea;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 73px;
  margin-bottom: 50px;
`;

const CreateButton = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 8px;
  background: #017100;

  color: #fff;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default CreatePage;
