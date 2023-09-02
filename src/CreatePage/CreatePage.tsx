import styled from "styled-components";
import CustomInput from "./components/CreateInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

    // 모든 입력 상태가 비어 있지 않을 때 true로 설정
    const isButtonActive = vacanceName !== '' && vacancePassword !== '' && vacancePasswordConfirm !== '';

  const createRoom = () => {
    // 방 생성
    // POST /api/v1/group
    // request: {
    //   title: String,
    //   pw: String
    // }
    // response: {
    //   result: {
    //     id: Number
    //   }
    // }

    const host = `http://52.78.130.4:8080/api/v1/group`;
    axios.post(host, {
      title: vacanceName,
      pw: vacancePassword
    }).then(response => {
      // console.error(response.result.id);
      // navigate(`/enter/${re}`)
    })
  }

  return (
    <StyledCreatePage>
      <img
        src="/assets/image/logo-black.png"
        style={{ width: "136px", height: "160px" }}
      />
      <InputContainer>
        {/* 바캉스 이름 */}
        <CustomInput
          placeholderText="Room Name"
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
          if (isButtonActive) {
            createRoom()
          }
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
  background: #fff;
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
  background: #000;

  color: #fff;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default CreatePage;
