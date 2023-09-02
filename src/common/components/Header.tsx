type Props = {
    onBack: () => void;
}
const Header = ({ onBack }: Props) => {
    return <Container>
        하이
    </Container>
}
export default Header;

const Container = styled.div`
padding: 1.2rem 1.6rem;
`;