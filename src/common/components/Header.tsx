import styled from "styled-components";

type Props = {
  onBack: () => void;
  headertitle: string;
};
const Header = ({ onBack, headertitle }: Props) => {
  return (
    <Container>
      <button onClick={onBack}>
        <img src="/assets/icon/back-space.svg" />
      </button>
      {headertitle}
    </Container>
  );
};
export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 16px 113px 16px 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;

  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
