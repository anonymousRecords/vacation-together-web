import styled from "styled-components";
import SignitureBox from "./SignitureBox";

interface ContractProps {
  cardRef: React.RefObject<HTMLDivElement>;
}

export default function Contract({cardRef}:ContractProps) {
  return (
    <StyledContract ref={cardRef}>
      {/* 계약서 안내 */}
      <ContractGuide>
        <ContractTitle>바캉스 계약서</ContractTitle>
        <ContractSubTitle>
          이 바캉스에서 아래의 항목을 중요하게
          <br />
          생각하는 사람을 알려 드립니다.
          <br />
          꼼꼼하게 읽고 계약을 완료해 주세요.
        </ContractSubTitle>
      </ContractGuide>
      {/* 계약서 내용 */}
      <CheckContainer>
      <table>
        <thead>
          <tr>
            <th><img src="/assets/image/logo-black.png" style={{width:'20px'}}/></th>
            <th align="center">이름</th>
            <th align="center">이름</th>
            <th align="center">이름</th>
            <th align="center">이름</th>
            <th align="center">이름</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>계획</th>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
          </tr>
          <tr>
            <th>주도</th>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
          </tr>
          <tr>
            <th>사진</th>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
          </tr>
          <tr>
            <th>예산</th>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
          </tr>
          <tr>
            <th>음주</th>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/checked-circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
            <td>
              <img src="/assets/icon/circle.png" />
            </td>
          </tr>
        </tbody>
      </table>
      </CheckContainer>
      <SignitureContainer>
        <SignitureGuide>
          우리는 서로의 성향을 <br /> 이해하고 존중할 것을 약속합니다.
        </SignitureGuide>
        <Signiture>
          <SignitureBox />
          <SignitureBox />
          <SignitureBox />
          <SignitureBox />
        </Signiture>
      </SignitureContainer>
    </StyledContract>
  );
}

const StyledContract = styled.div`
  margin-top: 150px;
  width: 330px;
  height: 628px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ContractGuide = styled.div`
  width: 286px;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContractTitle = styled.div`
  margin-bottom: 10px;
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ContractSubTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const CheckContainer = styled.div`
  width: 259px;
  height: 240px;

  img{
    width: 20px;
  }

  table {
    width: 100%;
  }
  
  thead th {
    border-bottom: 1px solid #000; 
    padding: 3px;
  }
  
  tr > th:first-child {
    border-right: 1px solid #000; 
  }

  th, td {
    width: 40px;
    padding: 3px;
  }

  table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SignitureContainer = styled.div`
  width: 286px;
  height: 154px;
  margin-top: 60px;
`;

const SignitureGuide = styled.div`
  display: block;
  margin-bottom: 20px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: center;
`;

const Signiture = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 5px; */
`;
