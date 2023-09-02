import styled from 'styled-components';
import Calendar from './components/Calendar';
import Header from '../common/components/Header';

type ConvertDate = Record<string, number>;

const SchedulePage = () => {
    const membersData = [{ member_id: '1234', selected_dates: ['2023-09-01', '2023-09-02', '2023-09-03']}, { member_id: '1235', selected_dates: ['2023-09-01', '2023-09-02', '2023-09-03']}];
    const convertDate: ConvertDate = {};
    
    const totalMember = membersData.length;
    membersData.forEach(member => {
        member.selected_dates.forEach(date => {
            convertDate[date] = convertDate[date] ? convertDate[date] + 1 : 1;
        });
    });

    console.log(convertDate);

    return <Container>
        <Header title="일정 정하기" onBack={() => console.log('onBack')} />
        <CalendarWrap>
            <Calendar />
        </CalendarWrap>
    </Container>
};

export default SchedulePage;

const Container = styled.div`
height: 100vh;
`

const CalendarWrap = styled.div`
height: 100%;
margin-top: 100px;
`;


// const Styled = styled.div`
// // min-width: 360px;
// // height: 100%;
// // display: flex;
// // flex-direction: column;
// // justify-content: center;
// // align-items: center;
// // background: #ffffff;
// `;