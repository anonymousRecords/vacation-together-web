import styled from 'styled-components';
import Calendar from './components/Calendar';
import Header from '../common/components/Header';

const SchedulePage = () => {
    return <Styled>
        <Header onBack={() => console.log('onBack')} />
        <Calendar />
    </Styled>
};

export default SchedulePage;

const Styled = styled.div`
    height: 100vh;
`;