import { styled } from "styled-components";

type Props = {
  title?: string;
  onBack: () => void;
};
const Header = ({ title, onBack }: Props) => {
  return (
    <Navigation>
      <NavigationLeft>
        <img
          src="/assets/icon/back.svg"
          alt="back button"
          width="24"
          height="24"
          onClick={onBack}
        />
      </NavigationLeft>
      {title && <Title>{title}</Title>}
      <NavigationRight></NavigationRight>
    </Navigation>
  );
};
export default Header;

const Navigation = styled.div`
  height: 56px;
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
`;
const NavigationButtonWrap = styled.div`
  position: absolute;
  width: 50%;
  display: flex;
  gap: 2.4rem;
  padding: 0 2rem;
  z-index: 30;
  > * {
    height: 2.4rem;
  }
`;
const NavigationLeft = styled(NavigationButtonWrap)`
  justify-content: flex-start;
  left: 0;
`;
const NavigationRight = styled(NavigationButtonWrap)`
  justify-content: flex-end;
  right: 0;
`;
const Title = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
